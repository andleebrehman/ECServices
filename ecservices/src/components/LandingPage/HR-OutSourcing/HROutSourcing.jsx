import React, { useEffect } from 'react';
import './HROutSourcing.css';
import heroBg from '../../../assets/Images/Events/MOIT3.png';


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
    <section className="hero-section" style={{
      backgroundImage: `linear-gradient(rgba(29, 115, 144, 0.85), rgba(33, 132, 132, 0.85)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text reveal">
              <h1>HR Outsourcing Services</h1><br/>
              <p>Streamline your human resources with our managed outsourcing solutions. Focus on your core business while we handle your talent.</p><br/> <br/>
              <button className="cta-button" onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}>Explore Solutions</button><br/> <br/>
            </div>
          </div>
        </div>
      </section>

      <section id="services-section" className="services-section" >
        <div className="container" >
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