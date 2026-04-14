import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import trainingIcon from '../../assets/Images/training-icon.png';
import consultingIcon from '../../assets/Images/consulting-icon.png';
import hrIcon from '../../assets/Images/hr-icon.png';
import logo from '../../assets/Images/logo.png';
import BackgroundElements from './BackgroundElements';

const services = [
  {
    title: 'Training',
    description: 'Upskill your workforce with our comprehensive corporate training programs designed to foster innovation and technical proficiency.',
    icon: trainingIcon,
    iconBg: '#E0F2FE',
    iconColor: '#0284C7',
    hoverColor: '#0284C7',
    cta: 'Start Learning',
    path: '/training',
  },
  {
    title: 'Consulting',
    description: 'Navigate complex challenges with our data-driven strategies. We optimize operations and accelerate growth for modern enterprises.',
    icon: consultingIcon,
    iconBg: '#E0E7FF',
    iconColor: '#4F46E5',
    hoverColor: '#4F46E5',
    cta: 'Get Advice',
    path: '/consulting',
  },
  {
    title: 'HR Outsourcing',
    description: 'Streamline your human resources with our managed outsourcing solutions. Focus on your core business while we handle your talent.',
    icon: hrIcon,
    iconBg: '#CCFBF1',
    iconColor: '#0D9488',
    hoverColor: '#0D9488',
    cta: 'Explore Solutions',
    path: '/hr-outsourcing',
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <BackgroundElements />

      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="ECS Logo" className="logo" />
        </div>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h1 className="headline">Empowering Business Excellence</h1>
          <p className="subtitle">
            We deliver strategic solutions through expert training, insightful consulting, 
            and seamless HR management. Experience the future of professional services.
          </p>
        </div>

        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-service={service.title.toLowerCase().replace(' ', '-')} onClick={() => navigate(service.path)}>
              <div className="icon-wrapper" style={{ backgroundColor: service.iconBg }}>
                {index === 0 && (
                  <svg className="service-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14L10.5 15.5L9 14M12 14L13.5 15.5L15 14M12 14V10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V7M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {index === 1 && (
                  <svg className="service-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L21 21M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 14L10 11L13 14L17 10" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {index === 2 && (
                  <svg className="service-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17C21 15.7635 19.7957 14.7014 18 14.2722M3 17C3 15.7635 4.20427 14.7014 6 14.2722M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke={service.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button 
                className="service-cta"
                onClick={() => navigate(service.path)}
                style={{ '--hover-color': service.hoverColor }}
              >
                {service.cta}
                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Copyright © 2000-2026 ECS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
