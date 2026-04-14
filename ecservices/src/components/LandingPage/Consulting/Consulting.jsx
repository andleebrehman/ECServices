import React from 'react';
import Navbar from './Navbar';
import AIWebBackground from './AIWebBackground';
import Footter from './Footter';
import './Consulting.css';
import consultingHeroBg from '../../../assets/Images/Consulting.jpeg';

const Consulting = () => {
  const whyChooseItems = [
    {
      title: 'Best Work',
      description: 'Thinking of the whole and not just the short term is crucial for achieving long-term success.',
      icon: '🎯',
      iconColor: '#00ba9d',
      iconBg: '#e6fffa'
    },
    {
      title: 'Experienced Team',
      description: 'Industry expertise and knowledge drive exceptional training results and business success.',
      icon: '👥',
      iconColor: '#2563eb',
      iconBg: '#ebf4ff'
    },
    {
      title: 'Professional Work',
      description: 'Maintaining ethical standards is crucial for building a positive reputation in the industry.',
      icon: '💼',
      iconColor: '#7c3aed',
      iconBg: '#f5f3ff'
    }
  ];

  const expertises = [
    {
      category: 'Consulting',
      services: [
        { title: 'Management Consultancy', description: 'Strategic guidance to optimize performance and achieve sustainable growth in competitive markets.', icon: '💡', iconBg: '#fff7ed', iconColor: '#f97316' },
        { title: 'Human Resource Management', description: 'End-to-end HR solutions from talent acquisition to performance tracking and cultural development.', icon: '👥', iconBg: '#eff6ff', iconColor: '#3b82f6' },
        { title: 'Risk & Compliance Internal Audit', description: 'Proactive risk assessment and compliance monitoring to safeguard your organizational integrity.', icon: '🛡️', iconBg: '#fef2f2', iconColor: '#ef4444' },
        { title: 'IT Audit', description: 'In-depth evaluation of your IT infrastructure, data security protocols, and systems efficiency.', icon: '💻', iconBg: '#f5f3ff', iconColor: '#8b5cf6' }
      ]
    },
    {
      category: 'Advisory',
      services: [
        { title: 'Merger & Acquisition', description: 'Expert advisory for seamless corporate transitions, ensuring maximum value realization for all stakeholders.', icon: '🤝', iconBg: '#f0fdfa', iconColor: '#14b8a6' },
        { title: 'Due Diligence', description: 'Comprehensive financial and operational investigations to minimize risk before critical investments.', icon: '🔍', iconBg: '#fffbeb', iconColor: '#f59e0b' },
        { title: 'Valuation Services', description: 'Precise asset and business valuation using industry-standard methodologies for accurate reporting.', icon: '📊', iconBg: '#f0fdf4', iconColor: '#22c55e' },
        { title: 'Forensic and Dispute', description: 'Independent financial investigations and expert witness support for complex legal and corporate disputes.', icon: '⚖️', iconBg: '#f5f3ff', iconColor: '#8b5cf6' }
      ]
    },
    {
      category: 'Business Process Outsourcing',
      services: [
        { title: 'Payroll & Bookkeeping', description: 'Accurate and timely financial recording combined with efficient employee compensation management.', icon: '🧾', iconBg: '#fffbeb', iconColor: '#f59e0b' },
        { title: 'MT & Billing', description: 'Streamlined transcription services and revenue cycle management optimized for modern healthcare.', icon: '📋', iconBg: '#fdf2f8', iconColor: '#ec4899' },
        { title: 'Printing & Digitization', description: 'High-quality document processing and legacy data migration to accelerate your paperless journey.', icon: '🖨️', iconBg: '#fff7ed', iconColor: '#f97316' },
        { title: 'Call Center', description: '24/7 customer support and engagement solutions designed to boost brand loyalty and satisfaction.', icon: '🎧', iconBg: '#fef2f2', iconColor: '#ef4444' }
      ]
    },
    {
      category: 'Enterprise Applications',
      services: [
        { title: 'Software Development', description: 'Customized web and mobile software solutions built with scalable architectures and modern stacks.', icon: '💻', iconBg: '#eff6ff', iconColor: '#3b82f6' },
        { title: 'Data Center Solutions', description: 'Robust cloud and on-premise infrastructure management to ensure maximum uptime and security.', icon: '🖥️', iconBg: '#f5f3ff', iconColor: '#8b5cf6' },
        { title: 'Enterprise Applications', description: 'Implementation and customization of ERP and CRM systems to streamline core business operations.', icon: '🏢', iconBg: '#f0fdf4', iconColor: '#22c55e' },
        { title: 'Trainings', description: 'Specialized professional training programs to empower your team with the latest industry skills.', icon: '👨‍🏫', iconBg: '#f5f3ff', iconColor: '#8b5cf6' }
      ]
    }
  ];


  return (
    <div className="consulting-page">
      <AIWebBackground />
      <Navbar />
      
      <section className="consulting-hero" style={{ backgroundImage: `url(${consultingHeroBg})` }}>
        <div className="consulting-hero-overlay"></div>
        <div className="hero-content-v2">
          <div className="hero-badge">EXCELLENCE IN CONSULTANCY</div>
          <h1>Empowering Business through <span className="highlight">Innovation</span></h1>
          <p>
            Unlock your organization's potential with strategic advisory, 
            process outsourcing, and world-class enterprise solutions.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Get Started Today</button>
            <button className="btn-secondary">Our Services</button>
          </div>
          <div className="hero-scroll-indicator">
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </div>
        </div>
      </section>

      <section id="why-choose" className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-grid">
            <div className="why-choose-main-card">
              <h2>Why Choose ECS?</h2>
              <p>We have a diversified team of consultants including subject matter experts of various industries. Our clients come from public, private, and international sectors.</p>
              <button className="learn-more-btn">Learn More <span>→</span></button>
            </div>
            <div className="why-choose-items">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="why-choose-card">
                  <div className="item-icon-wrapper" style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-header-section">
        <div className="container">
          <div className="expertise-header">
            <span className="subtitle">OUR EXPERTISE</span>
            <h2>World Class Solutions</h2>
            <p className="description">Empowering organizations with a diverse portfolio of consultancy and outsourcing services designed for the modern economy.</p>
          </div>
        </div>
      </section>

      <section className="expertise-grid-section">
        <div className="container">
          {expertises.map((group, groupIndex) => (
            <div key={groupIndex} className="expertise-group">
              <h3 className="category-title">{group.category}</h3>
              <div className="services-grid">
                {group.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-v2-card">
                    <div className="service-icon-box" style={{ backgroundColor: service.iconBg, color: service.iconColor }}>
                      {service.icon}
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footter />
    </div>
  );
};

export default Consulting;  