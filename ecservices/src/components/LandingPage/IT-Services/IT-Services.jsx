import React, { useEffect } from 'react';
import ITServicesNavbar from './ITServicesNavbar';
import BackgroundElements from '../../LandingPage/BackgroundElements';
import Footter from '../Consulting/Footter';
import './IT-Services.css';
import heroBgImage from '../../../assets/Images/Consulting.jpeg';

const ITServices = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const whyChooseItems = [
    {
      title: 'Experienced Team',
      description: 'Our team comprises seasoned developers, architects, and IT consultants with deep industry knowledge.',
      icon: '👨‍💻',
      iconColor: '#046384',
      iconBg: '#e0f2fe'
    },
    {
      title: 'Scalable Architecture',
      description: 'We build future-proof solutions designed to grow seamlessly as your enterprise scales.',
      icon: '📈',
      iconColor: '#087578',
      iconBg: '#ccfbf1'
    },
    {
      title: 'Secure Infrastructure',
      description: 'Security is embedded at every layer of our development, ensuring your data and systems are protected.',
      icon: '🔐',
      iconColor: '#13B3A4',
      iconBg: '#e6fffa'
    },
    {
      title: 'Agile Process',
      description: 'Fast iterations, transparent communication, and adaptable workflows for rapid delivery.',
      icon: '🔄',
      iconColor: '#2578A7',
      iconBg: '#e0f0fa'
    }
  ];

  const serviceCategories = [
    {
      category: 'Web Development',
      description: 'Building engaging and powerful digital experiences.',
      icon: '🌐',
      services: [
        { title: 'Custom Website Development', description: 'Tailor-made web applications built with modern frameworks to meet specific business needs.' },
        { title: 'E-Commerce Solutions', description: 'Secure, scalable, and high-performance online stores to drive sales and growth.' },
        { title: 'Responsive UI/UX Design', description: 'User-centric designs that provide seamless experiences across all devices and screen sizes.' }
      ]
    },
    {
      category: 'Software Development',
      description: 'Robust enterprise systems to power your operations.',
      icon: '💻',
      services: [
        { title: 'Enterprise Software Solutions', description: 'Comprehensive software to manage complex business operations and workflows.' },
        { title: 'CRM/ERP Systems', description: 'Custom implementations for customer relationship and enterprise resource planning.' },
        { title: 'Cloud-Based Applications', description: 'Scalable SaaS platforms leveraging cloud architecture for global accessibility.' }
      ]
    },
    {
      category: 'App Development',
      description: 'Mobile solutions for a connected world.',
      icon: '📱',
      services: [
        { title: 'Android App Development', description: 'Native Android applications delivering high performance and seamless integration.' },
        { title: 'iOS App Development', description: 'Elegant and secure native applications for the Apple ecosystem.' },
        { title: 'Cross-Platform Mobile Apps', description: 'Cost-effective solutions using modern frameworks to reach both iOS and Android users.' }
      ]
    },
    {
      category: 'CyberSecurity Services',
      description: 'Protecting your digital assets and infrastructure.',
      icon: '🛡️',
      services: [
        { title: 'VAPT', description: 'Vulnerability Assessment and Penetration Testing to proactively identify security gaps.' },
        { title: 'IT Audit', description: 'Comprehensive review of your IT infrastructure for compliance and risk management.' },
        { title: 'Threat Detection', description: 'Continuous monitoring and rapid response systems against sophisticated cyber threats.' }
      ]
    }
  ];

  return (
    <div className="it-services-page">
      <ITServicesNavbar />
      
      {/* Hero Section */}
      <section id="home" className="it-services-hero" style={{ '--bg-image': `url(${heroBgImage})` }}>
        <BackgroundElements 
          customClass="hero-web-background" 
          hideOverlay={true}
          customColors={{
            node: 'rgba(19, 179, 164, 1)',
            lineBase: '19, 179, 164',
            shadow: 'rgba(19, 179, 164, 1)'
          }}
        />
        <div className="it-services-hero-overlay"></div>
        <div className="hero-content-v2 reveal">
          <div className="hero-badge">ENTERPRISE IT SOLUTIONS</div>
          <h1>Driving Digital <span className="highlight">Transformation</span></h1>
          <p>
            Empower your business with scalable technology services, 
            modern IT infrastructure, and robust enterprise software designed for growth.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              Explore Services
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>
          <div className="hero-scroll-indicator">
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section reveal">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-subtitle">ABOUT IT SERVICES</span>
              <h2>Innovation Through Technology</h2>
              <p>
                At ECS, we provide cutting-edge IT services and digital transformation strategies. 
                Our team blends technical expertise with deep industry knowledge to deliver 
                solutions that optimize operations, enhance security, and drive sustainable growth.
              </p>
              <p>
                From custom software architecture to comprehensive cybersecurity, we are committed 
                to empowering modern enterprises. We leverage the latest technology stacks to build 
                scalable, client-focused solutions that give you a competitive edge.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>200+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat-item">
                  <h3>99%</h3>
                  <p>Client Retention</p>
                </div>
                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Dedicated Support</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder gradient-bg">
                <div className="placeholder-content">
                  <span className="placeholder-icon">🚀</span>
                  <p>Scalable Technology for the Future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section reveal">
        <div className="why-choose-container">
          <div className="why-choose-grid">
            <div className="why-choose-main-card">
              <h2>Why Choose Our IT Services?</h2>
              <p>
                We deliver high-performance solutions grounded in industry best practices. 
                Our approach combines agility with rigorous security standards to build 
                reliable infrastructure and software that scales with your ambition.
              </p>
              <button className="learn-more-btn" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                <span>View Our Expertise →</span>
              </button>
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

      {/* Offered Services Section */}
      <section id="services" className="services-section reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR EXPERTISE</span>
            <h2>Offered IT Services</h2>
            <p>Comprehensive technology solutions tailored for enterprise excellence</p>
          </div>
          
          <div className="services-showcase">
            {serviceCategories.map((category, idx) => (
              <div key={idx} className="service-category-card">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.category}</h3>
                  <p>{category.description}</p>
                </div>
                <div className="sub-services-list">
                  {category.services.map((sub, sIdx) => (
                    <div key={sIdx} className="sub-service-item">
                      <h4>{sub.title}</h4>
                      <p>{sub.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section reveal">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <h2>Ready to Transform Your Digital Infrastructure?</h2>
              <p>
                Partner with us to build secure, scalable, and innovative software solutions 
                that drive your business forward.
              </p>
            </div>
            <button className="cta-button" onClick={() => window.location.href = '/apply'}>Start a Project</button>
          </div>
        </div>
      </section>

      <Footter />
    </div>
  );
};

export default ITServices;
