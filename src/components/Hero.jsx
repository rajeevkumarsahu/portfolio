import React from 'react'
import './Hero.css'

const Hero = () => {
  const handleGetStarted = () => {
    const about = document.getElementById('about')
    if (about) about.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLearnMore = () => {
    const projects = document.getElementById('projects')
    if (projects) projects.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm Rajeev Kumar
              <span className="gradient-text"> Full Stack Developer</span>
            </h1>
            <p className="hero-description">
             A passionate Full Stack Developer specialized in React.js, JavaScript, and modern web technologies. I love building clean, user-friendly, and scalable web applications.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large" onClick={handleGetStarted}>About Me</button>
              <button className="btn btn-secondary btn-large" onClick={handleLearnMore}>View Projects</button>
            </div>
            
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-text"> rajeev </span>
                  <span className="code-symbol">=</span>
                  <span className="code-symbol"> {'{'}</span>
                </div>
                <div className="code-line indent">
                  <span className="code-text">name</span>
                  <span className="code-symbol">:</span>
                  <span className="code-string"> 'Rajeev Kumar'</span>
                </div>
                <div className="code-line indent">
                  <span className="code-text">education</span>
                  <span className="code-symbol">:</span>
                  <span className="code-string"> 'B.Tech (CSE)'</span>
                </div>
                <div className="code-line indent">
                  <span className="code-text">role</span>
                  <span className="code-symbol">:</span>
                  <span className="code-string"> 'React Developer'</span>
                </div>
                <div className="code-line">
                  <span className="code-symbol">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
