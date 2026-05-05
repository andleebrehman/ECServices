import React, { useEffect } from 'react';
import './HROutSourcing.css';


const HeroSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg-illustration">
    <rect x="20" y="20" width="360" height="260" rx="24" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2"/>
    <circle cx="80" cy="80" r="40" fill="#ccfbf1" fillOpacity="0.2"/>
    <circle cx="320" cy="220" r="60" fill="#ccfbf1" fillOpacity="0.15"/>
    <g filter="url(#drop-shadow)">
      <rect x="100" y="60" width="200" height="180" rx="16" fill="#ffffff" />
      <circle cx="200" cy="110" r="24" fill="#0d9488" fillOpacity="0.15"/>
      <circle cx="200" cy="104" r="10" fill="#0d9488"/>
      <path d="M184 126c0-6 12-10 16-10h0c4 0 16 4 16 10v4h-32v-4z" fill="#0d9488"/>
      <rect x="130" y="150" width="140" height="8" rx="4" fill="#f1f5f9"/>
      <rect x="130" y="170" width="100" height="8" rx="4" fill="#f1f5f9"/>
      <rect x="130" y="190" width="120" height="8" rx="4" fill="#f1f5f9"/>
      <rect x="130" y="210" width="80" height="8" rx="4" fill="#f1f5f9"/>
    </g>
    <defs>
      <filter id="drop-shadow" x="80" y="40" width="240" height="220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.15" />
      </filter>
    </defs>
  </svg>
);

const HROutSourcing = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  const services = [
    {
      title: 'Recruitment & Staffing',
      description: 'End-to-end recruitment solutions from sourcing to onboarding, finding the right talent for your organization.',
      icon: '👥'
    },
    {
      title: 'Payroll Management',
      description: 'Comprehensive payroll processing, tax compliance, and benefits administration with accuracy and timeliness.',
      icon: '💰'
    },
    {
      title: 'Employee Relations',
      description: 'Professional handling of employee relations, conflict resolution, and workplace policy implementation.',
      icon: '🤝'
    },
    {
      title: 'Compliance & Risk',
      description: 'Ensure regulatory compliance and minimize employment-related risks with expert guidance and support.',
      icon: '📋'
    }
  ];

  const benefits = [
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs by up to 40% with streamlined HR processes',
      icon: '💸'
    },
    {
      title: 'Expert Access',
      description: 'Get access to HR experts without the overhead of full-time hires',
      icon: '🎯'
    },
    {
      title: 'Scalability',
      description: 'Scale your HR capabilities up or down based on business needs',
      icon: '📈'
    },
    {
      title: 'Focus on Core Business',
      description: 'Free up resources to focus on strategic business initiatives',
      icon: '🚀'
    }
  ];

  return (
    <div className="hr-outsourcing-page">
    <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text reveal">
              <h1>HR Outsourcing Services</h1>
              <p>Streamline your human resources with our managed outsourcing solutions. Focus on your core business while we handle your talent.</p>
              <button className="cta-button">Explore Solutions</button>
            </div>
            <div className="hero-image reveal" style={{ animationDelay: '0.2s' }}>
              <HeroSVG />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title reveal">Our HR Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card reveal">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title reveal">Why Choose Our HR Outsourcing?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card reveal">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title reveal">Our Process</h2>
          <div className="process-timeline">
            <div className="process-step reveal">
              <div className="step-marker">1</div>
              <div className="step-content">
                <h3>Discovery & Assessment</h3>
                <p>Understanding your unique HR requirements and challenges</p>
              </div>
            </div>
            <div className="process-step reveal">
              <div className="step-marker">2</div>
              <div className="step-content">
                <h3>Solution Design</h3>
                <p>Creating customized HR solutions tailored to your needs</p>
              </div>
            </div>
            <div className="process-step reveal">
              <div className="step-marker">3</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>Seamless transition and integration with your operations</p>
              </div>
            </div>
            <div className="process-step reveal">
              <div className="step-marker">4</div>
              <div className="step-content">
                <h3>Ongoing Support</h3>
                <p>Continuous optimization and dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HROutSourcing;