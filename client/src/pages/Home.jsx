// import React from 'react'
// import Navbar from "../components/Navbar"
// const Home = () => {
//   return (
//     <div>
//       hello ia am home
//     </div>
//   )
// }

// export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/home.css"
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className="Home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Hi, I'm Raj Kishor 👋</h1>
            <h2>MERN Stack Developer</h2>
            <p>I build fast, modern web apps using MongoDB, Express, React, and Node.js.</p>
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
