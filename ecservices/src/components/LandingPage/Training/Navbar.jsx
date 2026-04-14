import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  const timeoutRef = useRef(null);
  const subTimeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveSubmenu(false);
    }, 300);
  };


  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="ECS" className="logo" />
        </Link>
        
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <NavLink 
                to="/training" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                About Us
              </NavLink>
            </li>
            
            <li 
              className={`dropdown ${activeMenu === 'training' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('training')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="dropdown-toggle">
                Training 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/training/basic">Basic Certification</Link></li>
                <li><Link to="/training/international">International Certification</Link></li>
                <li><Link to="/training/campus">Campus Locations</Link></li>
              </ul>
            </li>

            <li 
              className={`dropdown ${activeMenu === 'bootcamp' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('bootcamp')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="dropdown-toggle">
                Bootcamp 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/bootcamp/moit">MOIT & T</Link></li>
                <li><Link to="/bootcamp/in-house">In House</Link></li>
                <li 
                  className={`dropdown-submenu ${activeSubmenu ? 'open' : ''}`}
                  onMouseEnter={() => {
                    if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    setActiveSubmenu(true);
                    setActiveMenu('bootcamp'); // Ensure parent stays open
                  }}
                  onMouseLeave={() => {
                     subTimeoutRef.current = setTimeout(() => {
                      setActiveSubmenu(false);
                    }, 400); // Increased timeout for better usability
                  }}
                >
                  <button className="dropdown-toggle" type="button">
                    Register For Bootcamp ^
                  </button>
                  <ul 
                    className="dropdown-menu submenu"
                    onMouseEnter={() => {
                       // Explicitly keep both open when hovering the UL itself
                       if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
                       if (timeoutRef.current) clearTimeout(timeoutRef.current);
                       setActiveSubmenu(true);
                       setActiveMenu('bootcamp');
                    }}
                  >
                    <li><Link to="/register/faculty">Register For Faculty</Link></li>
                    <li><Link to="/register/it">Register For IT Professional</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Contact Us
              </NavLink>
            </li>
            
            <li 
              className={`dropdown ${activeMenu === 'gallery' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('gallery')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="dropdown-toggle">
                Gallery 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/events">Events</Link></li>
              </ul>
            </li>

            <li><Link to="/apply" className="apply-btn">Apply Now</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
