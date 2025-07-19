import React, { useState } from 'react'
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import '../styles/contact.css'
import axios  from 'axios'
import {toast} from 'react-toastify'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // form submission 
    try {
      if(!name || !email || !msg) {
        toast.error("Please fill all fields")
        return
      }
      const res = await axios.post("/api/contact/sendEmail", {name, email, msg})
      if(res.data.success){
        toast.success(res.data.message)
        setName('')
        setEmail('')    
        setMsg('')
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Failed to send message. Please try again.")
    }
  }

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <div className="social-links">
      <a 
        href="https://github.com/rajkishork05" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaGithub />
      </a>
      <a 
        href="https://www.linkedin.com/in/rajkishor05/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaLinkedin />
      </a>
    </div>
      <p className="contact-desc">Feel free to reach out to me for any questions or opportunities!</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-icon">
            <FiUser className="icon" />
          </div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <div className="input-icon">
            <FiMail className="icon" />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <div className="input-msg">
            <FiMessageSquare className="icon" />
          </div>
          <textarea
            placeholder="Your Message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <FiSend className="send-icon" />
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact