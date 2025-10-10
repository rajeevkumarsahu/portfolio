import React from 'react'
import './Features.css'

const About = () => {
  return (
    <section className="features section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          I'm Rajeev Kumar,Computer Science Engineer and Full Stack Developer with expertise in React.js, Java, Spring Boot, MySQL and modern UI frameworks.
Currently based in Noida (Delhi NCR), I have worked on projects like E-commerce Website, Weather App, Tic-Tac-Toe, Image Steganography.
I enjoy contributing to open source and learning new technologies every day.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3 className="feature-title">Education</h3>
            <p className="feature-description">B.Tech in Computer Science & Engineering (CSE)</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3 className="feature-title">Skills</h3>
            <p className="feature-description">React, JavaScript, HTML, CSS, Vite, Git, REST APIs</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Strengths</h3>
            <p className="feature-description">Clean UI, responsive design, component-driven architecture, performance focus</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
