import React, { useState } from 'react'
import { FaCoins, FaComments, FaTimes } from 'react-icons/fa'
import './EngagementTracker.css'

const EngagementTracker = ({ score, modalDismissed, onModalRecall, onScoreUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [displayScore, setDisplayScore] = useState(0)
  const [showGPModal, setShowGPModal] = useState(false)
  const [currentFunFact, setCurrentFunFact] = useState('')
  const [usedFacts, setUsedFacts] = useState([])
  const [currentPicture, setCurrentPicture] = useState('')
  const [usedPictures, setUsedPictures] = useState([])

  // Animate score counting up
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDisplayScore(prev => {
        if (prev < score) {
          return Math.min(prev + Math.ceil((score - prev) / 10), score)
        }
        return score
      })
    }, 50)
    
    return () => clearInterval(timer)
  }, [score])

  const funFacts = [
    "Geppi used to be a recording and touring musician.",
    "Geppi ran a D&D podcast for 5 seasons.",
    "Geppi has traveled to over 20 different countries.",
    "Geppi lives in NY with his wife, 2 dogs, and arrogant (but adorable) cat.",
    "Geppi asked for a writing desk for his 10th birthday because he wanted to be a writer like R.L. Stine.",
    "Geppi vibe coded this website and a few other projects that are on GitHub.",
    "One of Geppi's favorite concerts was seeing Radiohead outside of the Statue of Liberty.",
    "Geppi's current favorite movie is Everything, Everywhere, All At Once.",
    "Geppi is currently re-watching Better Call Saul and loving it because S'all Good, Man."
  ]

  const embarrassingPictures = [
    "/images/embarassingpic-1.jpg",
    "/images/embarassingpic-2.jpg", 
    "/images/embarassingpic-3.jpg",
    "/images/embarassingpic-4.jpg",
    "/images/embarassingpic-5.jpg",
    "/images/embarassingpic-6.jpeg",
    "/images/embarassingpic-7.jpg",
    "/images/embarassingpic-8.jpg"
  ]

  const getScoreMessage = () => {
    if (score >= 20) return 'Very Engaged!'
    if (score >= 10) return 'Getting Interested'
    return 'Just Browsing'
  }

  const handleGPWidgetClick = () => {
    setShowGPModal(true)
    setCurrentFunFact('') // Clear any previous fact/picture
    setCurrentPicture('') // Clear any previous picture
  }

  const handleUnlockFunFact = () => {
    if (score >= 5) {
      // Get available facts (not used yet)
      const availableFacts = funFacts.filter(fact => !usedFacts.includes(fact))
      
      if (availableFacts.length > 0) {
        // Select random fact from available ones
        const randomFact = availableFacts[Math.floor(Math.random() * availableFacts.length)]
        setCurrentFunFact(randomFact)
        setUsedFacts(prev => [...prev, randomFact])
        
        // Deduct 5 points
        onScoreUpdate(score - 5)
      } else {
        // All facts used, reset and start over
        setUsedFacts([])
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)]
        setCurrentFunFact(randomFact)
        setUsedFacts([randomFact])
        
        // Deduct 5 points
        onScoreUpdate(score - 5)
      }
    }
  }

  const handleUnlockPicture = () => {
    if (score >= 10) {
      // Get available pictures (not used yet)
      const availablePictures = embarrassingPictures.filter(picture => !usedPictures.includes(picture))
      
      if (availablePictures.length > 0) {
        // Select random picture from available ones
        const randomPicture = availablePictures[Math.floor(Math.random() * availablePictures.length)]
        setCurrentPicture(randomPicture)
        setUsedPictures(prev => [...prev, randomPicture])
        
        // Deduct 10 points
        onScoreUpdate(score - 10)
      }
    }
  }

  const handleCloseModal = () => {
    setShowGPModal(false)
    setCurrentFunFact('') // Clear current fact/picture
    setCurrentPicture('') // Clear current picture
  }

  return (
    <>
      <div className={`engagement-tracker ${isExpanded ? 'expanded' : ''}`}>
        <div 
          className="engagement-badge"
          onClick={handleGPWidgetClick}
        >
          <div className="score-icon">
            <FaCoins />
          </div>
          <div className="score-content">
            <div className="score-number">{displayScore} GP</div>
            <div className="score-label">(Geppi Points)</div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="engagement-details">
            <h4>Your Engagement Score</h4>
            <p className="engagement-message">{getScoreMessage()}</p>
            <div className="score-breakdown">
              <div className="breakdown-item">
                <span>Scroll 50% of Page</span>
                <span>+5 GP</span>
              </div>
              <div className="breakdown-item">
                <span>Interactive Clicks</span>
                <span>+2 GP each</span>
              </div>
              <div className="breakdown-item">
                <span>Learn More Buttons</span>
                <span>+5 GP each</span>
              </div>
            </div>
            {score >= 20 && (
              <div className="high-engagement">
                <p>🎉 You seem very engaged! Want to chat with Geppi?</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Minimized engagement modal */}
      {modalDismissed && score >= 20 && (
        <div 
          className="minimized-engagement-modal" 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="minimized-modal-content">
            <FaComments className="chat-icon" />
            <span>Chat with Geppi</span>
          </div>
        </div>
      )}

      {/* GP Store Modal */}
      {showGPModal && (
        <div className="gp-modal-overlay" onClick={handleCloseModal}>
          <div className="gp-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gp-modal-header">
              <h3>Welcome to the Geppi Digital Engagement Store!</h3>
              <button className="gp-modal-close" onClick={handleCloseModal}>
                <FaTimes />
              </button>
            </div>
            
            <div className="gp-modal-content">
              <p className="gp-modal-description">
                Spend your coveted GP (Geppi Points) by clicking either of the buttons below to unlock fun facts and embarrassing pictures of Geppi
              </p>
              
                             <div className="gp-modal-buttons">
                 <button 
                   className={`gp-store-btn ${score >= 5 ? 'enabled' : 'disabled'}`}
                   onClick={handleUnlockFunFact}
                   disabled={score < 5}
                 >
                   Unlock Fun Fact (5 GP)
                 </button>
                 <button 
                   className={`gp-store-btn ${score >= 10 && usedPictures.length < embarrassingPictures.length ? 'enabled' : 'disabled'}`}
                   onClick={handleUnlockPicture}
                   disabled={score < 10 || usedPictures.length >= embarrassingPictures.length}
                   title={usedPictures.length >= embarrassingPictures.length ? "You've unlocked all images! You really should contact Geppi!" : ""}
                 >
                   Unlock Embarrassing Picture (10 GP)
                 </button>
               </div>

                             {currentFunFact && (
                 <div className="unlocked-content">
                   <h4>Fun Fact Unlocked! 🎉</h4>
                   <p className="fun-fact-text">{currentFunFact}</p>
                 </div>
               )}

               {currentPicture && (
                 <div className="unlocked-content">
                   <h4>Embarrassing Picture Unlocked! 📸</h4>
                   <div className="picture-container">
                     <img 
                       src={currentPicture} 
                       alt="Embarrassing picture of Geppi" 
                       className="embarrassing-picture"
                     />
                   </div>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EngagementTracker 