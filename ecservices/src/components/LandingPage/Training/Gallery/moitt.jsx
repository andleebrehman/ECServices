import React, { useEffect } from 'react';
import './moitt.css';
import RegisterBackground from '../../../RegisterBackground';

// Import images
import trainingImage1 from '../../../../assets/Images/Events/MOIT2.png';
import trainingImage2 from '../../../../assets/Images/Events/MOIT3.png';
import trainingImage3 from '../../../../assets/Images/Events/MOIT4.png';

const Moitt = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleLinkClick = (e) => {
      if (e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  return (
    <div className="moitt-page">
         <RegisterBackground />
      {/* Header Section */}
      <header className="header-section">
        <div className="header-content">
          <h1 className="page-title">Ministry of IT Training</h1>
          <p className="page-subtitle">
            Empowering Pakistan's digital transformation through cutting-edge technology education
          </p>
        </div>
      </header>

      {/* Section 1: Left Image, Right Content */}
      <section id="overview" className="content-section">
        <div className="section-container">
          <div className="section-row">
            <div className="section-image">
              <img src={trainingImage1} alt="IT Training Program" className="content-image" />
            </div>
            <div className="section-content">
              <h2 className="section-title">Building National Capacity</h2>
              <p className="section-description">
                In collaboration with the Ministry of IT & Telecom (MOITT), we deliver high-impact boot camps in Blockchain, Data Science, and Cloud-Native Computing to accelerate Pakistan’s digital transformation through practical, outcome-driven learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Left Content, Right Image */}
      <section id="programs" className="content-section section-alt">
        <div className="section-container">
          <div className="section-row">
            <div className="section-content">
              <h2 className="section-title">Comprehensive Training Programs</h2>
              <p className="section-description">
               Our programs focus on training faculty members and IT professionals to ensure sustainable knowledge transfer, supported by strategic partnerships with the Higher Education Commission (HEC) and leading public and private universities.
              </p>
            </div>
            <div className="section-image">
              <img src={trainingImage2} alt="Training Programs" className="content-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Left Image, Right Content */}
      <section id="impact" className="content-section">
        <div className="section-container">
          <div className="section-row">
            <div className="section-image">
              <img src={trainingImage3} alt="Program Impact" className="content-image" />
            </div>
            <div className="section-content">
              <h2 className="section-title">Creating Lasting Impact</h2>
              <p className="section-description">
                This collaborative model strengthens national technical capacity, fosters innovation, and contributes to the growth of a knowledge-based digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Moitt;