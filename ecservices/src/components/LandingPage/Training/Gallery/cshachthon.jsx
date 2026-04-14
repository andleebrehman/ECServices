import React, { useEffect } from 'react';
import './moitt.css';
import RegisterBackground from '../../../RegisterBackground';

// Import images
import trainingImage1 from '../../../../assets/Images/Events/CS1.png';
import trainingImage2 from '../../../../assets/Images/Events/CS2.png';
import trainingImage3 from '../../../../assets/Images/Events/CS3.png';

const CSHackathon = () => {
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
          <h1 className="page-title">AJK First Cyber Security Hackathon</h1>
          <p className="page-subtitle">
            Strengthening Regional Cybersecurity Skills through Targeted Bootcamp in AJK
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
              <h2 className="section-title">Regional Cybersecurity Skills Training</h2>
              <p className="section-description">
                EC Services successfully conducted the AJK Cybersecurity Bootcamp, a targeted capacity-building initiative aimed at strengthening regional cybersecurity skills. The program trained 100 participants, equipping them with practical knowledge to address emerging cyber threats.
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
              <h2 className="section-title">Hands-On Cybersecurity Training</h2>
              <p className="section-description">
               The bootcamp featured hands-on, expert-led sessions focused on core cybersecurity concepts, risk mitigation, and secure digital practices, ensuring strong technical relevance and real-world application.
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
              <h2 className="section-title">Distinguished Closing Ceremony Highlight</h2>
              <p className="section-description">
                The program concluded with a distinguished closing ceremony graced by the then President of Azad Jammu & Kashmir, Sardar Masood Khan, alongside Vice Chancellors of universities, the Secretary IT AJK, and other notable dignitaries, underscoring the initiative’s significance and impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSHackathon;