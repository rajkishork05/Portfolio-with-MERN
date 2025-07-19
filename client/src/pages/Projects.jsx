// import React, { useEffect, useState } from 'react'
// import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython, SiHtml5, SiCss3, SiBootstrap, SiExpress, SiGithub } from 'react-icons/si'
// import '../styles/project.css'
// import { Link } from 'react-router-dom'

// const techIcons = {
//   JavaScript: <SiJavascript />,
//   React: <SiReact />,
//   Nodejs: <SiNodedotjs />,
//   MongoDB: <SiMongodb />,
//   Python: <SiPython />,
//   HTML: <SiHtml5 />,
//   CSS: <SiCss3 />,
//   Bootstrap: <SiBootstrap />,
//   Express: <SiExpress />,
//   GitHub: <SiGithub />
  
// }

// const Projects = () => {
//   const [repos, setRepos] = useState([])

//   useEffect(() => {
//     fetch('https://api.github.com/users/rajkishork05/repos')
//       .then(res => res.json())
//       .then(data => {
//         // Filter out forked repos and sort by updated date
//         const filtered = data
//           .filter(repo => !repo.fork)
//           .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
//         setRepos(filtered)
//       })
//   }, [])


  
//   // Example tech stack mapping for some projects (customize as needed)
//   const techMap = {
//     'portfolio': ['React', 'CSS', 'JavaScript'],
//     'quiz-app': ['React', 'Nodejs', 'MongoDB'],
//     'image-encryption': ['Python'],
//     'guide-booking': ['Nodejs', 'Express', 'MongoDB'],
//     // Add more mappings as needed
//   }

//   return (
//     <div className="projects-section">
//       <h2>My GitHub Projects</h2>
//       <div className="projects-grid">
//         {repos.map(repo => (
//           <div className="project-card" key={repo.id}>
//             <h3>
//               <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//                 {repo.name} <SiGithub style={{verticalAlign: 'middle'}} />
//               </a>
//             </h3>
//             <p>{repo.description || "No description provided."}</p>
//             <div className="tech-stack">
//               {(techMap[repo.name] || []).map(tech => (
//                 <span className="tech-icon" key={tech}>{techIcons[tech]} {tech}</span>
//               ))}
//             </div>
//             <div className="repo-link">
//               <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-btn">
//                 View on GitHub
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="contact-btn">
//         <Link to="/contact" className="repo-btn">Contact Me</Link>
//       </div>
//     </div>
//   )
// }

// export default Projects

import React, { useEffect, useState } from 'react'
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython, SiHtml5, SiCss3, SiBootstrap, SiExpress, SiGithub } from 'react-icons/si'
import '../styles/project.css'
import { Link } from 'react-router-dom'

const techIcons = {
  JavaScript: <SiJavascript />,
  React: <SiReact />,
  Nodejs: <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  Python: <SiPython />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  Bootstrap: <SiBootstrap />,
  Express: <SiExpress />,
  GitHub: <SiGithub />
}

const Projects = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  if (!navigator.onLine) {
    console.warn('You are offline!')
    setLoading(false)
    return
  }

  fetch('https://api.github.com/users/rajkishork05/repos')
    .then(res => res.json())
    .then(data => {
      const filtered = data
        .filter(repo => !repo.fork)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      setRepos(filtered)
    })
    .catch(err => console.error('Error fetching repos:', err))
    .finally(() => setLoading(false))
}, [])

  const techMap = {
    'portfolio': ['React', 'CSS', 'JavaScript'],
    'quiz-app': ['React', 'Nodejs', 'MongoDB'],
    'image-encryption': ['Python'],
    'guide-booking': ['Nodejs', 'Express', 'MongoDB'],
    // Add more mappings if needed
  }

  return (
    <div className="projects-section">
      <h2>My GitHub Projects</h2>

      {loading ? (
        <div className="spinner">Loading Projects...</div>
      ) : (
        <div className="projects-grid">
          {repos.map(repo => (
            <div className="project-card" key={repo.id}>
              <h3>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name} <SiGithub style={{ verticalAlign: 'middle' }} />
                </a>
              </h3>
              <p>{repo.description || "No description provided."}</p>
              <div className="tech-stack">
                {(techMap[repo.name] || []).map(tech => (
                  <span className="tech-icon" key={tech}>
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </div>
              <div className="repo-link">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-btn">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="contact-btn">
        <Link to="/contact" className="repo-btn">Contact Me</Link>
      </div>
    </div>
  )
}

export default Projects
