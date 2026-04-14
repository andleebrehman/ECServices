import React, { useEffect } from 'react';
import './cd.css';
import RegisterBackground from '../../../RegisterBackground';

// Import images
import trainingImage1 from '../../../../assets/Images/Events/CD2.png';
import trainingImage2 from '../../../../assets/Images/Events/CD3.png';
import trainingImage3 from '../../../../assets/Images/Events/CD4.png';

const CabinetDivision = () => {
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
          <h1 className="page-title">Cabinet Division</h1>
          <p className="page-subtitle">
            Strengthening Cybersecurity Capacity and Digital Governance for National Resilience
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
              <h2 className="section-title">Capacity Building Initiative</h2>
              <p className="section-description">
               We have successfully delivered advanced cybersecurity and digital governance training programs for the Cabinet Division, engaging professionals from the civil and defence sectors. These initiatives addressed key challenges related to cyber threats, data security, and institutional resilience in sensitive government environments.
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
              <h2 className="section-title">Practical Cybersecurity Governance Training</h2>
              <p className="section-description">
               The training covered cybersecurity frameworks, cyber risk management, secure digital infrastructure, and governance best practices, using a scenario-driven and practical approach aligned with real-world governmental operations.
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
              <h2 className="section-title">Enhancing National Cyber Resilience</h2>
              <p className="section-description">
               This engagement strengthened institutional cyber readiness, improved informed decision-making, and supported national cyber resilience by empowering key government stakeholders with critical cybersecurity and governance capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CabinetDivision;