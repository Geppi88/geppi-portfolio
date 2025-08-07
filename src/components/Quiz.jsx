import React, { useState } from 'react'
import { FaLightbulb, FaChartLine, FaUsers, FaRocket, FaCheckCircle } from 'react-icons/fa'
import './Quiz.css'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      id: 1,
      question: "What's your primary business goal right now?",
      options: [
        { text: "Scale existing product", value: "scale" },
        { text: "Launch new product", value: "launch" },
        { text: "Optimize user experience", value: "optimize" },
        { text: "Enter new markets", value: "expand" }
      ]
    },
    {
      id: 2,
      question: "What type of product are you building?",
      options: [
        { text: "B2B SaaS", value: "b2b" },
        { text: "Hardware", value: "hardware" },
        { text: "Mobile App", value: "mobile" },
        { text: "E-commerce", value: "ecommerce" }
      ]
    },
    {
      id: 3,
      question: "What's your biggest challenge?",
      options: [
        { text: "User acquisition", value: "acquisition" },
        { text: "Product-market fit", value: "pmf" },
        { text: "Team coordination", value: "team" },
        { text: "Revenue growth", value: "revenue" }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to make decisions?",
      options: [
        { text: "Data-driven analysis", value: "data" },
        { text: "User feedback", value: "user" },
        { text: "Market research", value: "market" },
        { text: "Strategic vision", value: "strategy" }
      ]
    },
    {
      id: 5,
      question: "What's your team size?",
      options: [
        { text: "1-5 people", value: "small" },
        { text: "6-50 people", value: "medium" },
        { text: "51-200 people", value: "large" },
        { text: "201+ people", value: "enterprise" }
      ]
    }
  ]

  const rationales = {
    // Question 1: Business Goal
    scale: "I've owned products at various phases of their lifecycle and achieved high-growth results on new and old products alike.",
    launch: "I've executed several 0->1 products across web, hardware, and mobile; while balancing budget, timeline, and revenue performance.",
    optimize: "I turned around Byte's end-of-treatment NPS from 3 all the way to 36 through product and operational optimizations.",
    expand: "I've managed global rollouts on new projects as well as new product verticals such as launching Byte+, which pushed Byte from being purely DTC to also supporting a B2B2C model.",
    
    // Question 2: Product Type
    b2b: "I've worked in the CRM/Marketing automation space with proven results increasing sales and platform engagement. I also have served as a founding product leader for a rewards platform SaaS offering.",
    hardware: "I've launched several hardware products early in my career in the aesthetic wellness space and the environmental space, with each launch achieving above-target sales performance.",
    mobile: "I launched the MyByte from 0->1 and maintained a 4.7 star rating across over 20k ratings in the first 2 years of the app's lifetime, with a healthy MAU/WAU of 85%.",
    ecommerce: "I helped Byte achieve 20m+ in annual growth through product bundling and other ecommerce optimizations using integrations across Shopify, Shiphero, Salesforce, and more.",
    
    // Question 3: Biggest Challenge
    acquisition: "I've managed growth-marketing websites that saw over 2M monthly UVs in traffic, converting a large share (>40%) into paying, onboarded accounts.",
    pmf: "I've been a founding PM at 2 different companies, and have helped existing companies launch into new verticals and geographies with consistent success.",
    team: "I am not only customer-obsessed, but team-obsessed as well and have built high-performing, fully empowered teams across product, design, engineering, and beyond. Let's talk culture!",
    revenue: "Whether it's a new product configuration, quick test-and-learn iterations on a platform, or an entirely new offering, I have a proven track record of achieving and exceeding growth targets.",
    
    // Question 4: Decision Making
    data: "Heap, Pendo, Sprig, Tableau, you name it, I've probably dabbled with it. I've had the fortune of being both data- and insights-rich in many of my roles and can bring the same rigor to your organization.",
    user: "I've done on-site interviews, product trials, and virtual user feedback sessions many times over. I love connecting with customers, and love taking qualitative data and collating it into best-in-class tools to create actionable insights.",
    market: "I've had the opportunity to help companies expand into new markets and in doing so have run up analyses against TAM, SAM, and current performance of products to create high-fidelity assessments on product-market fit.",
    strategy: "Being able to look far ahead to a wildly ambitious product future is one of my favorite things. I have a history of working with teams to create quick value to market while still keeping a solid foundation for a transformational future state of the product.",
    
    // Question 5: Team Size
    small: "I've worked with 2 companies with only a handful of employees as the founding product hire and can help you on the ground floor of building a great product culture.",
    medium: "I've worked for several companies both pre- and post-acquisition who were fairly right-sized in their employee count and as a result I can easily navigate consistently growing stakeholder complexity over time.",
    large: "I've worked with 2 companies that were further along in their growth journey as an organization. In these environments I am able to cut through the growing noise and keep a relentless focus on the right ideas, the right stakeholders, and the right enablers to growth the business.",
    enterprise: "I have worked for 2 multi-national enterprises in my career and have a wealth of experience navigating complex network of regional, legal, and cultural stakeholder requirements and processes without giving up agility."
  }

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value })
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getResult = () => {
    // Get the user's answers and create personalized rationales
    const userAnswers = Object.values(answers)
    const selectedOptions = questions.map((q, index) => {
      const answer = userAnswers[index]
      const option = q.options.find(opt => opt.value === answer)
      return {
        question: q.question,
        answer: option.text,
        rationale: rationales[answer]
      }
    })
    return selectedOptions
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
  }

  if (showResult) {
    const results = getResult()
    return (
      <section id="quiz" className="quiz">
        <div className="container">
          <h2 className="section-title">Quiz Results</h2>
          <div className="quiz-result">
            <div className="result-recommendation">
              <FaCheckCircle className="check-icon" />
              <h3>Based on your answers, here's why Geppi is the perfect fit:</h3>
            </div>
            
            <div className="results-breakdown">
              {results.map((result, index) => (
                <div key={index} className="result-item">
                  <div className="result-question">
                    <h4>{result.question}</h4>
                    <div className="result-answer">
                      <strong>Your answer:</strong> {result.answer}
                    </div>
                  </div>
                  <div className="result-rationale">
                    <strong>Why Geppi is the right fit:</strong>
                    <p>{result.rationale}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="quiz-actions">
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's talk!
              </button>
              <button 
                className="btn-secondary"
                onClick={restartQuiz}
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="quiz" className="quiz">
      <div className="container">
        <h2 className="section-title">What Kind of Product Manager Do You Need?</h2>
        <p className="section-subtitle">
          Take this quick quiz to find out what type of PM would be perfect for your team.
        </p>

        <div className="quiz-container">
          <div className="quiz-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <span className="progress-text">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          <div className="question-container">
            <h3 className="question-text">{questions[currentQuestion].question}</h3>
            <div className="options-grid">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleAnswer(option.value)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quiz 