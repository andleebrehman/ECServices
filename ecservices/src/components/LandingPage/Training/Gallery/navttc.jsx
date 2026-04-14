import React, { useEffect } from 'react';
import './moitt.css';
import RegisterBackground from '../../../RegisterBackground';

// Import images
import trainingImage1 from '../../../../assets/Images/Events/NAVTTC2.png';
import trainingImage2 from '../../../../assets/Images/Events/NAVTTC3.png';
import trainingImage3 from '../../../../assets/Images/Events/NAVTTC4.png';

const NAVTTC = () => {
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
          <h1 className="page-title">NAVTTC</h1>
          <p className="page-subtitle">
           Empowering Youth with Market-Driven Technical Skills through NAVTTC Collaboration
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
              <h2 className="section-title">NAVTTC Industry Skills Training</h2>
              <p className="section-description">
                We have successfully delivered industry-aligned technical skills training programs in collaboration with NAVTTC, operating under the Prime Minister’s Office, to equip Pakistan’s youth with employable, market-driven skills through hands-on training.
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
              <h2 className="section-title">Practical Industry-Focused Learning</h2>
              <p className="section-description">
               Led by experienced trainers and industry professionals, the programs focused on practical skill development, modern tools, and real-world applications aligned with current industry needs.
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
              <h2 className="section-title">Youth Employability Skills Advancement</h2>
              <p className="section-description">
                Over 500 participants were trained through these initiatives, contributing to youth empowerment, improved employability, and national skills development goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NAVTTC;