import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Training.css';
import BackgroundElements from '../BackgroundElements';

// Import Client Logos
import psebImg from '../../../assets/Images/pseb.png';
import pltlImg from '../../../assets/Images/pltl.png';
import surveyImg from '../../../assets/Images/survey.png';
import suiImg from '../../../assets/Images/sui.png';
import pitbImg from '../../../assets/Images/pitb.png';
import digitalImg from '../../../assets/Images/digital.png';
import icgcImg from '../../../assets/Images/icgc.png';
import nanoImg from '../../../assets/Images/nano.png';

// Import Premium Tech Illustrations
const mernImg = "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=800&auto=format&fit=crop"; 
const programmingImg = "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop";

const courses = [
  {
    title: "Cyber Security",
    desc: "Cybersecurity is the protection of internet-connected systems such as hardware, software and data from cyberthreats.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    link: "/courses/cyber"
  },
  {
    title: "Data Science",
    desc: "Process of using tools and techniques to draw actionable information out of huge volumes of noisy data.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "/courses/data"
  },
  {
    title: "Cloud Native Computing",
    desc: "The software approach of building, deploying, and managing modern applications in CCE.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    link: "/courses/cloud"
  },
  {
    title: "Blockchain Technology",
    desc: "An advanced database mechanism that allows transparent information sharing within a business network.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    link: "/courses/blockchain",
    isPrimary: true
  },
  {
    title: "Advanced Programming",
    desc: "Deep dive into modern software engineering principles, covering high-level languages and architectural patterns.",
    img: programmingImg,
    link: "/courses/programming",
    isPrimary: true
  },
  {
    title: "Full Stack MERN",
    desc: "Master MongoDB, Express.js, React.js, and Node.js to build modern, high-performance web applications.",
    img: mernImg,
    link: "/courses/mern",
    isPrimary: true
  }
];

const Training = () => {
  const sliderRef = useRef(null);

  /* Animation refs */

  const isPausedRef = useRef(false);

  useEffect(() => {
    // Reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // Cleanup
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const autoScroll = setInterval(() => {
      if (!isPausedRef.current && slider) {
        const scrollAmount = 410; // Card width + gap
        
        // Check if we've scrolled past the first set of items
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0; // Instant rewind to start for seamless loop
        }
        
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(autoScroll);
  }, []);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      isPausedRef.current = true; // Pause auto-scroll on interaction
      setTimeout(() => isPausedRef.current = false, 3000); // Resume after 3s

      const scrollAmount = 410; 
      const currentScroll = sliderRef.current.scrollLeft;
      
      if (direction === 'next') {
        sliderRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth'
        });
      } else {
        sliderRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };





  const clientLogos = [
    { src: psebImg, alt: "PSEB" },
    { src: pltlImg, alt: "PLTL" },
    { src: surveyImg, alt: "Survey" },
    { src: suiImg, alt: "SUI" },
    { src: pitbImg, alt: "PITB" },
    { src: digitalImg, alt: "Digital" },
    { src: icgcImg, alt: "ICGC" },
    { src: nanoImg, alt: "NANO" },
  ];

  return (
    <div className="training-page">
      {/* Hero Section */}
      <section className="hero-section">
        <BackgroundElements color="#BBECE8" />
        
        {/* Decorative Background Circles and Dots */}
        <div className="hero-circle circle-1"></div>
        <div className="hero-circle circle-2"></div>
        <div className="hero-circle circle-3"></div>
        <div className="hero-dot dot-1"></div>
        <div className="hero-dot dot-2"></div>
        <div className="hero-dot dot-3"></div>
        <div className="hero-dot dot-4"></div>
        <div className="hero-dot dot-5"></div>
        <div className="hero-dot dot-6"></div>

        {/* #ABE5E9 Moving Lines */}
        <div className="hero-moving-lines">
          <div className="hero-moving-line line-h line-1"></div>
          <div className="hero-moving-line line-h line-2"></div>
          <div className="hero-moving-line line-v line-3"></div>
          <div className="hero-moving-line line-d line-4"></div>
        </div>

        <div className="container reveal">
          <h1>Adaptive to your business, <br />your growth & the future</h1>
          <p>Proudly serving the world's top asset finance & leasing companies with smart software technology.</p>
          <div className="hero-cta-group" style={{justifyContent: 'center'}}>
            <a href="#courses" className="primary-btn">
              Explore Courses
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* About ECS Corporate Section */}
      <section className="about-corporate reveal">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-content">
              <h2>About ECS </h2>
              <p>ECS has helped organizations assess how to maximize their performance and worked with them to achieve their vision. Our strategy is focused on helping clients improve their operational performance, deliver their products and services more effectively and efficiently, and grow their businesses in existing and new markets. <br/>
              Our Strengths include:</p>
              
              <div className="about-list">
                <div className="about-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Maintaining a professional ethical image.</span>
                </div>
                <div className="about-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Thinking of the whole and not just the short term.</span>
                </div>
                <div className="about-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Industry Expertise and knowledge.</span>
                </div>
                <div className="about-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Our Strategic Alliance with Global Partners.</span>
                </div>
                <div className="about-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  <span> Subject Mater Experties.</span>
                </div>
                <div className="about-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  <span> Professional mentorship.</span>
               </div>
              </div>

              <a href="/about" className="primary-btn">Learn More About Us</a>
            </div>

            <div className="about-image-wrapper">
              <div className="stats-badge reveal">
                <div className="stat-box">
                  <h4>1232+</h4>
                  <span>Students</span>
                </div>
                <div className="stat-box">
                  <h4>64+</h4>
                  <span>Courses</span>
                </div>
                <div className="stat-box">
                  <h4>42+</h4>
                  <span>Events</span>
                </div>
                <div className="stat-box">
                  <h4>15+</h4>
                  <span>Expert Trainers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ECS Section */}
      <section className="why-choose-ecs reveal">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose ECS?</h2>
            <p>We have diversified team of consultants including the subject matter experts of the project management, business process flows and operations of various industries operating in public and private sectors. Our clients come from the public, private sectors, international funding and lending agencies, and not-for-profit organizations, across every major industry and represent diverse business challenges.</p>
          </div>
          
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Best Work</h3>
              <p>Thinking of the whole and not just the short term is crucial for long-term sustainable success.</p>
            </div>
            
            <div className="why-card reveal" style={{animationDelay: '0.2s'}}>
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Experienced team</h3>
              <p>Our industry expertise and deep domain knowledge guarantee exceptional project results.</p>
            </div>
            
            <div className="why-card reveal" style={{animationDelay: '0.4s'}}>
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3>Professional Work</h3>
              <p>Maintaining professional and ethical standards is at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="courses-section" id="courses">
        <div className="container">
          <div className="section-header reveal">
            <div className="header-with-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <h2>Popular Courses</h2>
              </div>
              <div className="slider-controls">
                <button 
                  className="slider-btn prev" 
                  aria-label="Previous"
                  onClick={() => handleScroll('prev')}
                >
                  &larr;
                </button>
                <button 
                  className="slider-btn next" 
                  aria-label="Next"
                  onClick={() => handleScroll('next')}
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          <div 
            className="courses-slider-container reveal" 
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="sliding-row courses-track">
              {[...courses, ...courses].map((course, index) => (
                <div className="course-card" key={`${course.title}-${index}`}>
                  <div className="c-img-box"><img src={course.img} alt={course.title} /></div>
                  <div className="c-body">
                    <h3 className={`course-title-alt ${course.isPrimary ? 'title-primary' : ''}`}>{course.title}</h3>
                    <p>{course.desc}</p>
                    <a href={course.link} className="q-link">View Details &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="clients-section reveal">
        <BackgroundElements dotCount={20} diamondCount={8} />
        <div className="container">
          <div className="section-header reveal">
            <h2>Our Trusted Clients</h2>
            <p>Empowering industry leaders across various sectors worldwide</p>
          </div>
          
          <div className="clients-outer-container reveal">
            <div className="clients-slider-container">
              <div className="clients-track">
                {/* We double the logos to create the seamless infinite scroll effect */}
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div className="client-box" key={`${client.alt}-${index}`}>
                    <img src={client.src} alt={client.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training and Solution Services section */}
      <section className="services-overview-section reveal">
        <div className="container">
          <div className="services-split">
            <div className="service-main-card training-service-card reveal">
              <div className="service-tag">Professional Training</div>
              <h2>Elevate Your Team's Expertise</h2>
              <p>We provide world-class training programs designed to bridge the gap between academic knowledge and industry requirements. From basic certifications to international standards, our workshops are led by global experts.</p>
              <ul className="service-features">
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg> Basic & International Certifications</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg> Hands-on Technical Workshops</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg> Customized Corporate Training</li>
              </ul>
              <a href="/training" className="primary-btn">Explore Training Programs</a>
            </div>

            <div className="service-main-card solution-service-card reveal" style={{animationDelay: '0.2s'}}>
              <div className="service-tag">Strategic Solutions</div>
              <h2>Innovative Business Solutions</h2>
              <p>ECS offers tailored IT and business solutions that empower organizations to scale efficiently. Our consulting and outsourcing services ensure you remain competitive in an ever-evolving digital landscape.</p>
              <ul className="service-features">
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg> Bespoke IT Infrastructure</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg> Strategic HR Outsourcing</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg> Technology Consulting</li>
              </ul>
              <a href="/solutions" className="secondary-btn">View All Solutions</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="container reveal">
        <div className="cta-banner">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Join our trotudress and unlock your lour solution services.</p>
          </div>
          <Link to="/apply" className="white-btn">Apply Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Training;