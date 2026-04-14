import React, { useEffect } from 'react';
import './moitt.css';
import RegisterBackground from '../../../RegisterBackground';

// Import images
import trainingImage1 from '../../../../assets/Images/Events/PPP1.png';
import trainingImage2 from '../../../../assets/Images/Events/PPP2.png';
import trainingImage3 from '../../../../assets/Images/Events/PPP3.png';

const PPP = () => {
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
          <h1 className="page-title">Public Private Partnership</h1>
          <p className="page-subtitle">
            Advancing Regional Higher Education through Strategic Collaboration with District Government Attock
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
              <h2 className="section-title">Establishing District Public Institute of Science and Technology Foundation</h2>
              <p className="section-description">
                Under a public–private partnership, we collaborated with the District Government Attock, Punjab, to establish an international-standard academic and research, degree-awarding institute named the District Public Institute of Science and Technology (DPIST). The institute operates under the supervision of the District Government Attock, with a focus on academic excellence, research, and innovation aligned with global standards.
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
              <h2 className="section-title">Modern Campus and Programs</h2>
              <p className="section-description">
              DPIST is built on a 30-kanal purpose-designed campus, featuring modern infrastructure to support advanced learning and research. Academic programs are developed in collaboration with internationally recognized universities and organizations, ensuring quality, relevance, and global alignment.
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
              <h2 className="section-title">Advancing Regional Higher Education</h2>
              <p className="section-description">
                This initiative marks a significant milestone in strengthening regional higher education through global partnerships, strong governance, and sustainable public–private collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPP;