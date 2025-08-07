import React, { useState } from 'react'
import { FaDollarSign, FaUsers, FaChartLine, FaTimes } from 'react-icons/fa'
import './Outcomes.css'

const Outcomes = () => {
  const [showModal, setShowModal] = useState(false)

  const outcomes = [
    {
      icon: <FaDollarSign />,
      metric: '$460M',
      label: 'Revenue Generated',
      description: 'Cumulative revenue impact from product initiatives and optimizations'
    },
    {
      icon: <FaUsers />,
      metric: '10',
      label: 'PMs Managed & Mentored',
      description: 'Product managers I\'ve directly managed and mentored throughout my career'
    },
    {
      icon: <FaChartLine />,
      metric: '10x',
      label: 'NPS Improvement',
      description: 'Average improvement in Net Promoter Score across products I\'ve optimized'
    }
  ]

  const handleLearnMore = () => {
    setShowModal(true)
  }

  return (
    <section id="outcomes" className="outcomes">
      <div className="container">
        <h2 className="section-title">Measurable Outcomes</h2>
        <p className="section-subtitle">
          Here are the concrete results and impact I've delivered across my product management career.
        </p>

        <div className="metrics-grid">
          {outcomes.map((outcome, index) => (
            <div key={index} className="metric-card">
              <div className="metric-icon">
                {outcome.icon}
              </div>
              <div className="metric-number">{outcome.metric}</div>
              <div className="metric-label">{outcome.label}</div>
              <div className="metric-description">{outcome.description}</div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <button className="btn-primary learn-more-btn" onClick={handleLearnMore}>
            Learn More About My Impact
          </button>
        </div>
      </div>

      {/* Resume Modal */}
      {showModal && (
        <div className="resume-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>Geppi Iaia - Resume</h3>
              <button 
                className="resume-modal-close"
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="resume-modal-content">
              <iframe 
                src="/resume.pdf.pdf" 
                title="Geppi Iaia Resume"
                width="100%"
                height="600px"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Outcomes 