import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './IT-Services.css'; // Reuse IT Services CSS for navbar styles
import logo from '../../../assets/Images/logo.png';

const ITServicesNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="it-services-navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="ECS Logo" className="logo-image" />
          </Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-link">Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link about-btn">About</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="nav-link services-btn">Services</a>
          <Link to="/apply" className="apply-btn" onClick={() => setIsMenuOpen(false)}>Apply now</Link>
        </div>

        <button className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default ITServicesNavbar;
