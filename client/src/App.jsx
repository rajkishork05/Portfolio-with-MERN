import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import {ToastContainer} from 'react-toastify';  
const App = () => {
  return (
    <div className='main-content'>
      <ToastContainer/>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path= "/about" element = {<About/>} />
        <Route path= "/contact" element = {<Contact/>} />
        <Route path= "/project" element = {<Projects/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
