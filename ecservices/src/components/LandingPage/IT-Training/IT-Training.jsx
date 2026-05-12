import React, { useEffect } from 'react';
import Navbar from '../Consulting/Navbar';
import AIWebBackground from '../Consulting/AIWebBackground';
import Footter from '../Consulting/Footter';
import './IT-Training.css';
import itTrainingHeroBg from '../../../assets/Images/Consulting.jpeg';

const ITTraining = () => {
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
      title: 'Industry-Ready Skills',
      description: 'Our curriculum is designed in collaboration with industry leaders to ensure you learn the most in-demand technologies.',
      icon: '🎯',
      iconColor: '#7c3aed',
      iconBg: '#f5f3ff'
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from certified professionals with years of real-world experience in top tech companies.',
      icon: '👨‍💻',
      iconColor: '#0284c7',
      iconBg: '#e0f2fe'
    },
    {
      title: 'Hands-On Projects',
      description: 'Build real-world projects that you can showcase in your portfolio to potential employers.',
      icon: '💻',
      iconColor: '#059669',
      iconBg: '#ecfdf5'
    }
  ];

  const trainingPrograms = [
    {
      category: 'Web Development',
      programs: [
        { title: 'Full Stack MERN', description: 'Master MongoDB, Express.js, React.js, and Node.js to build modern web applications.', icon: '⚛️', iconBg: '#e0f2fe', iconColor: '#0284c7' },
        { title: 'React.js Development', description: 'Build dynamic, responsive user interfaces with the most popular frontend library.', icon: '⚛️', iconBg: '#fef3c7', iconColor: '#d97706' },
        { title: 'Angular & TypeScript', description: 'Develop enterprise-grade applications with Angular framework and TypeScript.', icon: '🅰️', iconBg: '#fce7f3', iconColor: '#db2777' },
        { title: 'Vue.js Ecosystem', description: 'Create progressive web applications using Vue.js, Vuex, and Vue Router.', icon: '💚', iconBg: '#dcfce7', iconColor: '#16a34a' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      programs: [
        { title: 'AWS Cloud Practitioner', description: 'Gain foundational understanding of AWS Cloud concepts and services.', icon: '☁️', iconBg: '#fef9c3', iconColor: '#ca8a04' },
        { title: 'Docker & Kubernetes', description: 'Master containerization and orchestration for modern application deployment.', icon: '🐳', iconBg: '#e0f2fe', iconColor: '#0284c7' },
        { title: 'CI/CD Pipelines', description: 'Learn to automate build, test, and deployment processes with Jenkins and GitLab.', icon: '🔄', iconBg: '#f3e8ff', iconColor: '#9333ea' },
        { title: 'Terraform & IaC', description: 'Implement Infrastructure as Code using Terraform for cloud resource management.', icon: '🏗️', iconBg: '#ffedd5', iconColor: '#ea580c' }
      ]
    },
    {
      category: 'Data & AI',
      programs: [
        { title: 'Data Science with Python', description: 'Analyze data, build ML models, and derive insights using Python and popular libraries.', icon: '📊', iconBg: '#dbeafe', iconColor: '#2563eb' },
        { title: 'Machine Learning', description: 'Deep dive into supervised and unsupervised learning algorithms and model deployment.', icon: '🤖', iconBg: '#fce7f3', iconColor: '#db2777' },
        { title: 'Deep Learning & TensorFlow', description: 'Build neural networks and deep learning models for complex AI applications.', icon: '🧠', iconBg: '#f3e8ff', iconColor: '#9333ea' },
        { title: 'Natural Language Processing', description: 'Process and analyze human language data using NLP techniques and libraries.', icon: '💬', iconBg: '#dcfce7', iconColor: '#16a34a' }
      ]
    },
    {
      category: 'Cybersecurity',
      programs: [
        { title: 'Ethical Hacking', description: 'Learn penetration testing techniques to identify and fix security vulnerabilities.', icon: '🔐', iconBg: '#fee2e2', iconColor: '#dc2626' },
        { title: 'Network Security', description: 'Secure network infrastructure and implement defense mechanisms against cyber threats.', icon: '🛡️', iconBg: '#fef3c7', iconColor: '#d97706' },
        { title: 'Security Operations', description: 'Monitor and respond to security incidents using SIEM tools and best practices.', icon: '👁️', iconBg: '#e0f2fe', iconColor: '#0284c7' },
        { title: 'Compliance & Governance', description: 'Understand regulatory requirements and implement security governance frameworks.', icon: '📋', iconBg: '#f3e8ff', iconColor: '#9333ea' }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Career Acceleration',
      description: 'Fast-track your career with industry-recognized certifications and practical skills.',
      icon: '🚀'
    },
    {
      title: 'Flexible Learning',
      description: 'Choose from online, in-person, or hybrid learning options that fit your schedule.',
      icon: '📅'
    },
    {
      title: 'Job Placement Support',
      description: 'Get career counseling, resume building, and interview preparation assistance.',
      icon: '💼'
    },
    {
      title: 'Lifetime Access',
      description: 'Access course materials and updates even after completing your training.',
      icon: '♾️'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Evaluate your current skills and career goals to recommend the right training path.'
    },
    {
      step: '2',
      title: 'Enrollment',
      description: 'Register for your chosen program with flexible payment options and schedules.'
    },
    {
      step: '3',
      title: 'Learning',
      description: 'Engage in interactive sessions, hands-on labs, and real-world projects.'
    },
    {
      step: '4',
      title: 'Certification',
      description: 'Complete assessments, earn certifications, and showcase your new skills.'
    }
  ];

  return (
    <div className="it-training-page">
      <AIWebBackground />
      <Navbar />
      
      <section className="it-training-hero" style={{ backgroundImage: `url(${itTrainingHeroBg})` }}>
        <div className="it-training-hero-overlay"></div>
        <div className="hero-content-v2">
          <div className="hero-badge">EXCELLENCE IN IT TRAINING</div>
          <h1>Master the Technologies of Tomorrow</h1>
          <p>
            Transform your career with cutting-edge IT training programs. 
            From web development to cybersecurity, we equip you with the skills 
            that top employers demand.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}>
              Explore Programs
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Us
            </button>
          </div>
          <div className="hero-scroll-indicator">
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </div>
        </div>
      </section>

      <section className="about-section reveal">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-subtitle">ABOUT OUR TRAINING</span>
              <h2>Empowering Tech Professionals</h2>
              <p>
                At ECS, we bridge the gap between academic knowledge and industry requirements. 
                Our IT training programs are designed by experts who understand what employers 
                are looking for. We combine theoretical foundations with hands-on practical 
                experience to ensure you're job-ready from day one.
              </p>
              <p>
                Whether you're a beginner starting your tech journey or a professional looking 
                to upskill, our comprehensive curriculum adapts to your needs. Join thousands 
                of successful graduates who have transformed their careers with ECS training.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>5000+</h3>
                  <p>Graduates</p>
                </div>
                <div className="stat-item">
                  <h3>95%</h3>
                  <p>Placement Rate</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Corporate Partners</p>
                </div>
                <div className="stat-item">
                  <h3>4.9/5</h3>
                  <p>Student Rating</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon">🎓</span>
                  <p>Start Your IT Journey Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose" className="why-choose-section reveal">
        <div className="why-choose-container">
          <div className="why-choose-grid">
            <div className="why-choose-main-card">
              <h2>Why Choose ECS IT Training?</h2>
              <p>
                We don't just teach technology – we prepare you for real-world challenges. 
                Our industry-aligned curriculum, expert instructors, and hands-on approach 
                ensure you gain skills that matter.
              </p>
              <button className="learn-more-btn" onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}>
                <span>View Programs →</span>
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

      <section className="programs-header-section reveal">
        <div className="container">
          <div className="programs-header">
            <span className="subtitle">TRAINING PROGRAMS</span>
            <h2>Comprehensive Course Catalog</h2>
            <p className="description">
              Choose from our wide range of IT training programs designed for every skill level 
              and career goal. Each program is crafted to deliver maximum value and practical skills.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="programs-grid-section reveal">
        <div className="container">
          {trainingPrograms.map((group, groupIndex) => (
            <div key={groupIndex} className="program-group">
              <h3 className="category-title">{group.category}</h3>
              <div className="programs-grid">
                {group.programs.map((program, programIndex) => (
                  <div key={programIndex} className="program-card">
                    <div className="program-icon-box" style={{ backgroundColor: program.iconBg, color: program.iconColor }}>
                      {program.icon}
                    </div>
                    <h4>{program.title}</h4>
                    <p>{program.description}</p>
                    <button className="program-cta">Learn More →</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">BENEFITS</span>
            <h2>Why Train With Us?</h2>
            <p>Experience the ECS advantage with our comprehensive support system</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">HOW IT WORKS</span>
            <h2>Your Learning Journey</h2>
            <p>Simple steps to transform your career with IT training</p>
          </div>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-marker">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section reveal">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <h2>Ready to Start Your IT Training Journey?</h2>
              <p>
                Join thousands of successful professionals who have transformed their careers 
                with our industry-leading IT training programs.
              </p>
            </div>
            <button className="cta-button">Enroll Now</button>
          </div>
        </div>
      </section>

      <Footter />
    </div>
  );
};

export default ITTraining;
