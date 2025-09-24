import React from 'react'
import './Features.css'

const Projects = () => {
  const projects = [
    {
      title: 'Todo App',
      description: 'A simple and fast task manager with add, edit, complete, and filter.',
      tech: ['React', 'Hooks', 'LocalStorage'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Weather App',
      description: 'Current weather and 5-day forecast using a public weather API.',
      tech: ['React', 'Fetch', 'OpenWeather'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'QR Generator',
      description: 'Generate QR codes instantly from any text or URL.',
      tech: ['React', 'qrcode'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Tic Tac Toe',
      description: 'Classic game with win detection and replay – built with React.',
      tech: ['React', 'Hooks'],
      link: '#',
      image: 'https://picsum.photos/seed/tictactoe/1200/800'
    }
  ]

  return (
    <section className="features section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some things I've built recently.</p>

        <div className="features-grid">
          {projects.map((p, i) => (
            <div className="feature-card" key={i}>
              {p.image && (
                <img className="project-image" src={p.image} alt={p.title} loading="lazy" />
              )}
              <h3 className="feature-title">{p.title}</h3>
              <p className="feature-description">{p.description}</p>
              <p className="feature-description"><strong>Tech:</strong> {p.tech.join(', ')}</p>
              <a className="btn btn-secondary" href={p.link} target="_blank" rel="noreferrer">View</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
