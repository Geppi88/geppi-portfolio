import React, { useState } from 'react'
import { FaLightbulb, FaChartLine, FaUsers, FaRocket, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './About.css'

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const skills = [
    { name: 'Product Strategy', level: 95 },
    { name: 'Data Analysis', level: 90 },
    { name: 'Agile/Scrum', level: 90 },
    { name: 'Stakeholder Management', level: 88 },
    { name: 'User Research', level: 85 },
    { name: 'Market Analysis', level: 85 },
    { name: 'AI', level: 60 },
    { name: 'Programming', level: 40 }
  ]

  const strengths = [
    {
      icon: <FaLightbulb />,
      title: 'Strategic Vision',
      description: 'Ability to see the big picture and align product decisions with business goals'
    },
    {
      icon: <FaChartLine />,
      title: 'Data-Driven',
      description: 'Making decisions based on analytics, user feedback, and market research'
    },
    {
      icon: <FaUsers />,
      title: 'User-Centric',
      description: 'Deep understanding of user needs and translating them into product features'
    },
    {
      icon: <FaRocket />,
      title: 'Execution Focused',
      description: 'Getting things done quickly and at scale while building a highly empowered and engaged team culture'
    }
  ]

  const slides = [
    {
      id: 'journey',
      title: 'My Journey',
      content: (
        <div className="journey-content">
          <div className="journey-text">
            <p>
              Like most PMs, I got started in a really unconventional way. I took time after college to be a wanderlust, touring and recording in a band. Little did I know that my ability to market myself would be seen as a fit for a small startup looking to launch a new product.
            </p>
            <p>
              After the usual imposter syndrome, I found myself achieving positive results after launching my first product and was quickly obsessed. Since then I have worked in B2B, B2C, on hardware, web apps, mobile apps, I've been a high performing individual contributor, and a head of product leading a team of 8 other PMs.
            </p>
            <p>
              My 9+ year career can be categorized by its diversification, as I believe that jumping into new verticals, optimizing new and old products alike, and championing small teams and juggernauts have consistently led me to new challenges that help me stand out among a sea of worthy candidates in this crowded market.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'strengths',
      title: 'What I Bring',
      content: (
        <div className="strengths-content">
          <div className="strengths-grid">
            {strengths.map((strength, index) => (
              <div key={index} className="strength-card">
                <div className="strength-icon">
                  {strength.icon}
                </div>
                <h5>{strength.title}</h5>
                <p>{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Skill Exposure',
      content: (
        <div className="skills-content">
          <p className="skills-intro">
            Over my 9+ year career I've been able to spend a deep amount of time honing my product craft. Here is a brief overview of my time spent devoted to some of the core competencies of the job.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Growth-obsessed product leader with several years experience building features, managing teams, and spearheading processes that lead to customer delight. Experience working with industry titans (inheriting an 86% market share) and poorly reviewed underdogs (inheriting a 3% NPS) alike while managing to grow and improve these companies through thoughtful product vision, development, and optimization.
        </p>

        <div className="carousel-container">
          <div className="carousel-navigation">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${slide.title}`}
              >
                {slide.title}
              </button>
            ))}
          </div>

          <div className="carousel-content">
            <button 
              className="carousel-btn prev-btn" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>

            <div className="carousel-slide">
              <h3 className="slide-title">{slides[currentSlide].title}</h3>
              <div className="slide-content">
                {slides[currentSlide].content}
              </div>
            </div>

            <button 
              className="carousel-btn next-btn" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 