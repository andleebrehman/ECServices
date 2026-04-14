import React, { useEffect } from 'react';
import './ignite.css';
import RegisterBackground from '../../../RegisterBackground';

// Import images
import trainingImage1 from '../../../../assets/Images/Events/IGNITE1.png';
import trainingImage2 from '../../../../assets/Images/Events/IGNITE2.png';
import trainingImage3 from '../../../../assets/Images/Events/IGNITE3.png';

const IGNITE = () => {
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
          <h1 className="page-title">IGNITE</h1>
          <p className="page-subtitle">
Driving Nationwide Cybersecurity Talent Development with IGNITE Initiatives
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
              <h2 className="section-title">Nationwide Cybersecurity Skills Development</h2>
              <p className="section-description">
                We have successfully executed nationwide cybersecurity training programs and hackathons in collaboration with IGNITE across multiple regions of Pakistan. These initiatives focused on developing advanced cybersecurity skills, ethical hacking expertise, and problem-solving capabilities among emerging and professional talent.
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
              <h2 className="section-title">Hands-On Cybersecurity Capacity Building</h2>
              <p className="section-description">
               Through expert-led sessions, hands-on labs, and competitive hackathons, participants engaged with real-world cyber challenges and industry-aligned practices, fostering innovation, teamwork, and a strong cybersecurity culture.
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
              <h2 className="section-title">Building Future Cyber Talent</h2>
              <p className="section-description">
                More than 3,500 participants were trained through these initiatives, significantly strengthening Pakistan’s national cybersecurity capacity and building a future-ready talent pool.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IGNITE;