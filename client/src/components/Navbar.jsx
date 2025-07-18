import React, { useState } from 'react';
import { FcAreaChart } from 'react-icons/fc';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        <FcAreaChart size={30} /> Raj Kishor
      </h2>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={closeMobileMenu}>
       <li ><Link className='li' to="/">Home</Link></li> 
       <li ><Link className='li' to="/about">About</Link></li> 
       <li ><Link className='li' to="/project">Projects</Link></li> 
       <li ><Link className='li' to="/Contact">Contact</Link></li> 
      </ul>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
