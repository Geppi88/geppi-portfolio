import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showResumeModal, setShowResumeModal] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'MyByte Mobile App',
      description: 'Led the development of a treatment companion mobile app which was instrumental in improving NPS from 3 to 36, and increasing monthly accessory sales by 60%.',
      tags: ['Mobile', 'B2C', 'Healthcare'],
      thumbnail: '/images/byteapp.png',
      demoLink: '#',
      caseStudyLink: '#',
      categories: ['mobile', 'b2c', 'healthcare']
    },
    {
      id: 2,
      title: 'SharpSpring Lead UI Revamp',
      description: 'Overhaul of CRM features, including a new lead view that led to a 5% increase in CRM tier conversions and a 30% uptick in lead and opportunity object utilization.',
      tags: ['B2B', 'SaaS', 'Analytics', 'Web'],
      thumbnail: '/images/shsplead.png',
      demoLink: '#',
      caseStudyLink: '#',
      categories: ['b2b', 'saas', 'analytics', 'web']
    },
    {
      id: 3,
      title: 'AI-Powered Scan UX',
      description: 'An AI-powered, user-guided photo capture built in the MyByte mobile app to auto-capture and assess aligner fit to give the user instant feedback and direction on their treatment plan. Reduced cases/customer rate and improved profitability/customer by 15%.',
      tags: ['Mobile', 'AI', 'B2C', 'Healthcare'],
      thumbnail: '/images/aifitscan.png',
      demoLink: '#',
      caseStudyLink: '#',
      categories: ['mobile', 'ai', 'b2c', 'healthcare']
    },
    {
      id: 4,
      title: 'Petro Autosampler',
      description: 'A petroleum analyzer leveraging an automated magazine to pre-load samples and save lab technicians valuable handle times. Achieved 129% sales achievement within the first three months after go-live.',
      tags: ['B2B', 'Hardware', 'Environmental'],
      thumbnail: '/images/autosampler.jpg',
      demoLink: '#',
      caseStudyLink: '#',
      categories: ['b2b', 'hardware', 'environmental']
    },
    {
      id: 5,
      title: 'MVP Healthcare - Provider Search',
      description: 'Complete revamp of our provider search experience and UI, including card-scanning and other best-in-class features. Increased authenticated web traffic by 40%.',
      tags: ['B2B', 'Web', 'Healthcare'],
      thumbnail: '/images/mvpprovidersearch.png',
      demoLink: '#',
      caseStudyLink: '#',
      categories: ['b2b', 'web', 'healthcare']
    },
    {
      id: 6,
      title: 'Byte+ Portal LOOM integration',
      description: 'Clinician web app integration with LOOM that allowed doctors to record in-situ videos to send to patients to explain their treatment plan. Led to plan purchase conversion rate increase of 12%.',
      tags: ['B2B', 'B2C', 'Web', 'Healthcare'],
      thumbnail: '/images/byteplusloom.png',
      demoLink: '#',
      caseStudyLink: '#',
      categories: ['b2b', 'b2c', 'web', 'healthcare']
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'b2b', label: 'B2B' },
    { id: 'b2c', label: 'B2C' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter))

  const handleLearnMore = (e) => {
    e.preventDefault()
    setShowResumeModal(true)
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of the products I've helped build and scale. Each project represents 
          a unique challenge and demonstrates my approach to product management.
        </p>

        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-thumbnail">
                <img src={project.thumbnail} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link" onClick={handleLearnMore}>
                      <FaExternalLinkAlt />
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>Geppi Iaia - Resume</h3>
              <button 
                className="resume-modal-close"
                onClick={() => setShowResumeModal(false)}
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

export default Projects 