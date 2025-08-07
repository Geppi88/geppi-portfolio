import React, { useState } from 'react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create email content
    const subject = encodeURIComponent('Portfolio Contact - New Message from ' + formData.name)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )
    
    // Open email client with pre-filled content
    const mailtoLink = `mailto:jiaia8872@gmail.com?subject=${subject}&body=${body}`
    window.open(mailtoLink, '_blank')
    
    // Update UI
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/geppiiaia/',
      color: '#0077B5'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      url: 'mailto:jiaia8872@gmail.com',
      color: '#EA4335'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">
          Ready to build something amazing? I'm always open to discussing new opportunities, 
          collaborations, or just having a great conversation about product management.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Whether you're looking to hire a Product Manager, need consulting on your product strategy, 
              or want to discuss potential collaborations, I'd love to hear from you.
            </p>
            
            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--hover-color': link.color }}
                  >
                    <div className="social-icon">
                      {link.icon}
                    </div>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 