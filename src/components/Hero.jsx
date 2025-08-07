import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Geppi Iaia</span>
          </h1>
          <h2 className="hero-subtitle">Product Manager</h2>
          <p className="hero-description">
            I turn complex problems into elegant solutions. From B2B SaaS to marketplaces, 
            I've helped companies scale through data-driven product decisions and strategic vision.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' })}
            >
              Take the Quiz
            </button>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">9+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Products Launched</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7</span>
            <span className="stat-label">Industries</span>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <FaArrowDown />
        <span>Learn More</span>
      </div>
    </section>
  )
}

export default Hero 