import React from 'react'

const Projects = () => {
  return (
    <div>
       

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Weather App</h3>
            <p>React + OpenWeather API</p>
            <a href="https://github.com/your-repo/weather-app" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
          <div className="project-card">
            <h3>Music Listener</h3>
            <p>React + Node + MongoDB</p>
            <a href="https://github.com/your-repo/music-app" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
