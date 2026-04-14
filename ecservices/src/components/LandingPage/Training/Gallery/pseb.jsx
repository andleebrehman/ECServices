import React, { useEffect } from 'react';
import './moitt.css';
import RegisterBackground from '../../../RegisterBackground';

// Import images
import trainingImage1 from '../../../../assets/Images/Events/PSEB3.png';
import trainingImage2 from '../../../../assets/Images/Events/PSEB4.png';

const PSEB = () => {
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
          <h1 className="page-title">PSEB E-Rozgar Center</h1>
          <p className="page-subtitle">
            Empowering Freelancers and Promoting Digital Entrepreneurship through PSEB E-Rozgar Center
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
              <h2 className="section-title">Establishing E-Rozgar Center</h2>
              <p className="section-description">
                EC Services was the first organization to establish an E-Rozgar Center through a public-private partnership, providing a dedicated hub for freelancers to enhance their digital skills and efficiency. The center offered training, resources, and mentorship to help participants compete effectively in the global freelance market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Left Image, Right Content */}
      <section id="impact" className="content-section">
        <div className="section-container">
          <div className="section-row">
            <div className="section-image">
              <img src={trainingImage2} alt="Program Impact" className="content-image" />
            </div>
            <div className="section-content">
              <h2 className="section-title">Promoting Digital Freelance Entrepreneurship</h2>
              <p className="section-description">
                The center was officially inaugurated by Federal Minister Umer Saif, marking a key milestone in promoting digital entrepreneurship. It became a platform for freelancers to develop practical skills, increase productivity, and generate sustainable income, contributing to Pakistan’s digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PSEB;