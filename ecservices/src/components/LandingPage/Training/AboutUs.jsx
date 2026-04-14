import React, { useEffect } from 'react';
import './AboutUs.css';
import BackgroundElements from '../BackgroundElements';

// Import Partner Logos
import microsoftLogo from '../../../assets/Images/Partners/Microsoft.png';
import ciscoLogo from '../../../assets/Images/Partners/cisco.png';
import redhatLogo from '../../../assets/Images/Partners/redhat.png';
import comptiaLogo from '../../../assets/Images/Partners/comptia.png';
import ecCouncilLogo from '../../../assets/Images/Partners/EC-council.png';
import kasperskyLogo from '../../../assets/Images/Partners/Kaspersky.png';
import certNexusLogo from '../../../assets/Images/Partners/CertNexus.png';
import pearsonLogo from '../../../assets/Images/Partners/pearson.png';
import psiLogo from '../../../assets/Images/Partners/psi.png';
import rsaLogo from '../../../assets/Images/Partners/rsa.png';

// Partner logos - defined outside component to prevent recreation on every render
const partnerLogos = [
  { src: microsoftLogo, alt: 'Microsoft' },
  { src: ciscoLogo, alt: 'Cisco' },
  { src: redhatLogo, alt: 'Red Hat' },
  { src: comptiaLogo, alt: 'CompTIA' },
  { src: ecCouncilLogo, alt: 'EC-Council' },
  { src: kasperskyLogo, alt: 'Kaspersky' },
  { src: certNexusLogo, alt: 'CertNexus' },
  { src: pearsonLogo, alt: 'Pearson VUE' },
  { src: psiLogo, alt: 'PSI' },
  { src: rsaLogo, alt: 'RSA' },
];

const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-reveal').forEach(el => observer.observe(el));
  }, []);

  const strengths = [
    "Maintaining a professional ethical image.",
    "Delivering on what was promised.",
    "Thinking of the whole and not just the short term.",
    "Industry Expertise and knowledge.",
    "Our Strategic Alliance with Global Partners.",
    "Premier client list.",
    "Subject Mater Experties.",
    "Professional mentorship."
  ];

  const coreValues = [
    {
      title: "CREDIBILITY",
      desc: "The trust is between us and our partners and the confidence in delivering of what is distinctive and the best.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    },
    {
      title: "CONFIDENCE",
      desc: "Professional performance based on specialists in each field with experience and high scientific qualifications, locally and internationally.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      )
    },
    {
      title: "PROFESSIONALISM",
      desc: "Creating new ways to deliver our services through continuous development, following up and updating the latest technology.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      title: "INNOVATION",
      desc: "The credibility of the educational material, knowledge, skill and all the services of our institute by adopting the actual rules and standards as well.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
      )
    }
  ];

  // Dynamically load partner images from assets/Images/Partners (no hardcoded paths)
  const partnerImages = React.useMemo(() => {
    try {
      const context = require.context('../../../assets/Images/Partners', false, /\.(png|jpe?g|svg)$/);
      const images = context.keys().map((key) => ({
        src: context(key),
        alt: key.replace('./', '').replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
      }));
      return images;
    } catch (e) {
      // Fallback: map from existing static imports if require.context is unavailable
      return (partnerLogos || []).map((p) => ({ src: p.src, alt: p.alt }));
    }
  }, []);

  return (
    <div className="about-us-wrapper">
      {/* Hero Section */}
      <section className="about-hero">
        <BackgroundElements />
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="container content-center animate-reveal">
          <h1 className="hero-title">About Us</h1>
        </div>
      </section>

      {/* ECS Intro */}
      <section className="about-intro section-padding">
        <div className="container grid-2">
          <div className="intro-text animate-reveal">
            <p className="lead-text">
              ECS has helped organizations assess how to maximize their performance and worked with them to achieve their vision. Our strategy is focused on helping clients improve their operational performance, deliver their products and services more effectively and efficiently, and grow their businesses in existing and new markets.
            </p>
            <h3>Our Strengths include:</h3>
            <ul className="strength-list">
              {strengths.map((item, idx) => (
                <li key={idx}><span className="check">✓</span> {item}</li>
              ))}
            </ul>
          </div>
          <div className="intro-visual animate-reveal">
            <div className="image-stack">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" alt="Digital City" className="main-img" />
              <div className="floating-badge badge-top">Strategic Excellence</div>
              <div className="floating-badge badge-bottom">Trusted Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: "1232", label: "Students" },
              { num: "64", label: "Courses" },
              { num: "42", label: "Events" },
              { num: "15", label: "Trainers" }
            ].map((stat, i) => (
              <div key={i} className="stat-card animate-reveal">
                <span className="stat-num">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section-padding">
        <div className="container grid-2-rev">
          <div className="mission-text animate-reveal">
            <h2 className="section-title">OUR MISSION</h2>
            <p>
              Our mission is to be a high-integrity partner, providing world-class technology brands and solutions into emerging markets and focusing on customer satisfaction. EC Services (Private) Ltd provides a comprehensive set of services to support the design, installation, operation and management of IT.
            </p>
          </div>
          <div className="mission-visual animate-reveal">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Mission Vision" className="rounded-img" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <h2 className="section-title center animate-reveal">WHAT'S IMPORTANT TO US</h2>
          <div className="values-grid">
            {coreValues.map((val, i) => (
              <div key={i} className="value-card animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="value-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Training & Solution Partners */}
      <section className="partners-section section-padding">
        <div className="container">
          <h2 className="section-title center animate-reveal">OFFICIAL TRAINING & SOLUTION PARTNERS</h2>
          <div className="partners-marquee">
            <div className="partners-track">
              {[...partnerImages, ...partnerImages].map((img, idx) => (
                <div className="partner-logo-wrapper" key={idx}>
                  <img
                    className="partner-logo"
                    src={img.src}
                    alt={`Partner - ${img.alt}`}
                    loading="lazy"
                    decoding="async"
                    height="50"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
