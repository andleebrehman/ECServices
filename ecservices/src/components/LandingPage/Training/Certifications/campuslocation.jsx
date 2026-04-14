import React, { useEffect, useRef } from 'react';
import './campuslocation.css';

const FlowBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 80;
    const connectionDistance = 150;
    const colors = ['#108BCA', '#59BCB2'];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.3;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="flow-bg-canvas" />;
};

const CampusLocation = () => {
  const campuses = [
    {
      city: 'Islamabad',
      address: 'Suite No. 3, Block-26, G-7/1, Islamabad, Pakistan',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.344419638801!2d73.06000301414503!3d33.70003464365702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf2006f3c7d7%3A0x468d100d17ebf513!2sEC%20Services%20(Pvt.)%20Limited!5e0!3m2!1sen!2s!4v1676620594448!5m2!1sen!2s',
      stars: 5,
    },
    {
      city: 'Lahore',
      address: 'Phase 6 DHA, Lahore, Punjab, Pakistan',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.344419638801!2d73.06000301414503!3d33.70003464365702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf2006f3c7d7%3A0x468d100d17ebf513!2sEC%20Services%20(Pvt.)%20Limited!5e0!3m2!1sen!2s!4v1676620594448!5m2!1sen!2s',
      stars: 5,
    },
    {
      city: 'Karachi',
      address: 'Main Shahrah-e-Faisal, Karachi, Sindh, Pakistan',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.344419638801!2d73.06000301414503!3d33.70003464365702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf2006f3c7d7%3A0x468d100d17ebf513!2sEC%20Services%20(Pvt.)%20Limited!5e0!3m2!1sen!2s!4v1676620594448!5m2!1sen!2s',
      stars: 5,
    },
    {
      city: 'Peshawar',
      address: 'University Road, Peshawar, Khyber Pakhtunkhwa, Pakistan',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.344419638801!2d73.06000301414503!3d33.70003464365702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf2006f3c7d7%3A0x468d100d17ebf513!2sEC%20Services%20(Pvt.)%20Limited!5e0!3m2!1sen!2s!4v1676620594448!5m2!1sen!2s',
      stars: 5,
    },
  ];

  return (
    <div className="campus-page">
      <FlowBackground />
      <div className="campus-hero">
        <span className="hero-badge">GLOBAL STANDARDS • LOCAL PRESENCE</span>
        <h1 className="hero-title">Campus Locations</h1>
        <p className="hero-subtitle">
          Discover our world-class facilities across Pakistan. Each campus is 
          designed to foster innovation, collaboration, and professional excellence.
        </p>
      </div>

      <div className="campus-container">
        <div className="campus-grid">
          {campuses.map((campus, index) => (
            <div key={index} className="campus-card">
              <div className="card-header">
                <div className="header-top">
                  <span className="campus-id">CAMPUS #0{index + 1}</span>
                  <div className="stars">
                    {'★'.repeat(campus.stars)}
                  </div>
                </div>
                <h2 className="city-name">{campus.city} <span className="city-dot"></span></h2>
                <div className="address-info">
                  <span className="loc-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <p className="address-text">{campus.address}</p>
                </div>
              </div>

              <div className="map-wrapper">
                <iframe
                  src={campus.mapUrl}
                  title={`${campus.city} Campus Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="card-footer">
                <span className="details-link">
                  LOCATION DETAILS <span>→</span>
                </span>
                <button className="directions-btn">DIRECTIONS</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusLocation;
