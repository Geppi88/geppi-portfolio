import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Outcomes from './components/Outcomes'
import Quiz from './components/Quiz'
import Contact from './components/Contact'
import EngagementTracker from './components/EngagementTracker'
import './App.css'

function App() {
  const [engagementScore, setEngagementScore] = useState(0)
  const [showEngagementModal, setShowEngagementModal] = useState(false)
  const [modalDismissed, setModalDismissed] = useState(false)

  useEffect(() => {
    // Initialize engagement tracking
    let maxScrollDepth = 0
    let scrollRewarded = false

    const handleClick = (e) => {
      // Check if clicking on an interactable element
      const target = e.target
      const isInteractable = target.tagName === 'BUTTON' || 
                            target.tagName === 'A' || 
                            target.closest('button') || 
                            target.closest('a') ||
                            target.closest('.project-link') ||
                            target.closest('.learn-more-btn')
      
      if (isInteractable) {
        // Check for special Learn More buttons
        const isLearnMore = target.closest('.project-link') || target.closest('.learn-more-btn')
        const points = isLearnMore ? 5 : 2 // 3 + 2 for Learn More, 2 for other interactables
        
        setEngagementScore(prev => Math.min(prev + points, 100))
      }
    }

    const handleScroll = () => {
      const scrollDepth = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth
        // Award 5 points when reaching 50% scroll depth (only once)
        if (scrollDepth >= 50 && !scrollRewarded) {
          scrollRewarded = true
          setEngagementScore(prev => Math.min(prev + 5, 100))
        }
      }
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (engagementScore >= 20 && !showEngagementModal && !modalDismissed) {
      setTimeout(() => {
        setShowEngagementModal(true)
      }, 2000)
    }
  }, [engagementScore, showEngagementModal, modalDismissed])

  const handleModalDismiss = () => {
    setShowEngagementModal(false)
    setModalDismissed(true)
  }

  const handleModalRecall = () => {
    setShowEngagementModal(true)
  }

  return (
    <Router>
      <div className="App">
        <Navigation />
                 <EngagementTracker 
           score={engagementScore} 
           modalDismissed={modalDismissed}
           onModalRecall={handleModalRecall}
           onScoreUpdate={setEngagementScore}
         />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Outcomes />
              <Quiz />
              <Contact />
            </>
          } />
        </Routes>

        {showEngagementModal && (
          <div className="engagement-modal-overlay">
            <div className="engagement-modal">
              <h3>You seem interested, let's chat! 🎉</h3>
              <p>Want to chat with Geppi about your next project?</p>
              <div className="modal-buttons">
                <button 
                  onClick={handleModalDismiss}
                  className="btn-secondary"
                >
                  Maybe later
                </button>
                <button 
                  onClick={() => {
                    handleModalDismiss()
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary"
                >
                  Let's talk!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  )
}

export default App 