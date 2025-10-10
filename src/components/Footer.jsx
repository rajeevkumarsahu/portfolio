import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Rajeev Kumar</h3>
            <p className="footer-description">
              Full Stack developer crafting fast, accessible, and modern web applications.
            </p>
            <div className="social-links">
              <a href="https://github.com/rajeevkumarsahu" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rajeev-kumar-a12617197/" className="linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-info">
              <p>📧 <a href="mailto:rajeevkumar22202@gmail.com">rajeevkumar22202@gmail.com</a></p>
              <p>📞 <a href="tel:+91XXXXXX5979">+91-6200695979</a></p>
              <p>📍 Samastipur,Bihar</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rajeev Kumar. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/resume/Rajeev-kumar-CV (1).pdf" target="_blank" rel="noreferrer">Resume</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
