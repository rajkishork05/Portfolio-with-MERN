import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>
          &copy; {new Date().getFullYear()} Raj Kishor &mdash; All rights reserved.
        </span>
        <span>
          Made with <span style={{color: "#e25555"}}>♥</span> | Connect on
          <a href="https://github.com/rajkishork05" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer