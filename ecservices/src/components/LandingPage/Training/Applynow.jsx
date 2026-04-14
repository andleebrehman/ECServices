import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Applynow.css';

const FlowBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 90;
    const connectionDistance = 150;
    const colors = ['#086a9c', '#3d8b83'];

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
        ctx.globalAlpha = 0.6;
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
            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.4;
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

const Applynow = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log("Form submitted");
  };

  return (
    <div className="apply-now-page">
      <FlowBackground />
      <div className="apply-header text-center">
        <span className="badge-text">EMPOWERING EDUCATION</span>
        <h1 className="main-title">Apply Now</h1>
        <p className="subtitle">
          Join our professional training programs and transform your career with industry-leading certifications.
        </p>
      </div>

      <div className="form-container">
        <div className="form-card">
          <h2 className="form-title">Apply For Training</h2>
          <div className="title-underline"></div>
          
          <form onSubmit={handleSubmit} className="apply-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cell">CELL NO</label>
                <input type="tel" id="cell" placeholder="Cell No: 0300 0000000" required />
              </div>
              <div className="form-group">
                <label htmlFor="timing">PREFER SESSION TIMING</label>
                <select id="timing" required defaultValue="">
                  <option value="" disabled>Select Prefer Timing...</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="training">TRAINING</label>
              <select id="training" required defaultValue="">
                <option value="" disabled>Select training</option>
                <option value="cyber">Cyber Security</option>
                <option value="data">Data Science</option>
                <option value="cloud">Cloud Native Computing</option>
                <option value="blockchain">Blockchain Technology</option>
                {/* Add more as needed */}
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="location">LOCATION</label>
              <select id="location" required defaultValue="">
                <option value="" disabled>Select location</option>
                <option value="islamabad">Islamabad</option>
                <option value="lahore">Lahore</option>
                <option value="karachi">Karachi</option>
                <option value="online">Online</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="mode">TRAINING MODE</label>
              <select id="mode" required defaultValue="">
                <option value="" disabled>Select training mode</option>
                <option value="physical">Physical</option>
                <option value="online">Online</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div className="button-group">
              <button type="submit" className="submit-btn">Submit Application</button>
              <button type="button" className="back-btn" onClick={() => navigate(-1)}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Applynow;
