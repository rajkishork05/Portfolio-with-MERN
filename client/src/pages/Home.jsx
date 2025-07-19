import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/home.css"
import Footer from '../components/Footer'

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Stack Developer"
]

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx(idx => (idx + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="Home">
      {/* Hero Section */}
      
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Hi, I'm Raj Kishor 👋</h1>
            <h2 className="animated-role">{roles[roleIdx]}</h2>
            <p>
              I’m a passionate and detail-oriented full-stack web developer who specializes in building responsive, scalable, and user-friendly applications using the MERN stack — MongoDB, Express.js, React, and Node.js. With a strong foundation in computer science and hands-on experience in projects ranging from weather dashboards to real-time chat apps and portfolio websites, I thrive on solving complex problems with clean and efficient code. I enjoy working in collaborative environments, exploring emerging technologies, and continuously learning to improve both frontend and backend development. When I’m not coding, you might find me participating in hackathons, exploring open-source contributions, or refining my skills in UI/UX design. 
            </p>
            <Link to="/about" className='btn'>About Me</Link>
          </div>
          <div className="hero-image">
            <img src="raj.jpg" alt="Raj Kishor" />
          </div>
        </div>
      </section>
     
    </div>
  )
}

export default Home