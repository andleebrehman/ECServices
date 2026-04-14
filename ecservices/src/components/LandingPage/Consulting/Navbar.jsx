import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/Images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };





  return (
    <>
      <nav className="consulting-navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="ECS Logo" className="logo-image" />
            </Link>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/consulting" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/consulting/about" className="nav-link about-btn" onClick={() => setIsMenuOpen(false)}>About us</Link>
            <Link to="/consulting/contact" className="nav-link contact-btn" onClick={() => setIsMenuOpen(false)}>Contact us</Link>
            <Link to="/consulting/apply" className="apply-btn" onClick={() => setIsMenuOpen(false)}>Apply now</Link>
          </div>

          <button className="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      

      

    </>
  );
};

export default Navbar;
