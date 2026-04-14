import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Basic-Certification.css';
import imgFreelance from '../../../../assets/Images/Certifications/Freelance.jpeg';
import imgPython from '../../../../assets/Images/Certifications/Python.jpeg';
import imgWebDev from '../../../../assets/Images/Certifications/webdevelopment.jpeg';
import imgWordpress from '../../../../assets/Images/Certifications/wordpress.jpeg';
import imgGraphic from '../../../../assets/Images/Certifications/graphic.jpeg';
import imgVideoEditing from '../../../../assets/Images/Certifications/vedioediting.png';
import imgWebDesign from '../../../../assets/Images/Certifications/webdesign.jpeg';
import imgSpokenEnglish from '../../../../assets/Images/Certifications/spokenenglish.jpeg';
import imgAppDev from '../../../../assets/Images/Certifications/appdevelopment.jpeg';
import imgCIT from '../../../../assets/Images/Certifications/cit.jpeg';
import imgSEO from '../../../../assets/Images/Certifications/seo.jpeg';
import imgSMM from '../../../../assets/Images/Certifications/socialmedia.jpeg';
import imgCpp from '../../../../assets/Images/Certifications/c++.jpeg';
import imgAmazonFBA from '../../../../assets/Images/Certifications/amazonfba.jpeg';
import imgAmazonVA from '../../../../assets/Images/Certifications/amazonva.jpeg';
import imgJava from '../../../../assets/Images/Certifications/java.jpeg';
import imgDigitalMarketing from '../../../../assets/Images/Certifications/digitalmarketing.jpeg';

const basicCerts = [
  {title: 'Freelancing', desc: 'Start, grow, and scale as a professional freelancer.', img: imgFreelance, duration: '2 Months', fee: '25000' },
  {title: 'Python', desc: 'Foundations to advanced Python programming.', img: imgPython, duration: '2 Months', fee: '37000' },
  {title: 'Web Development', desc: 'Front-end to back-end basics to launch your career.', img: imgWebDev, duration: '2 Months', fee: '25000' },
  {title: 'WordPress', desc: 'Design, build and manage WordPress websites like a pro.', img: imgWordpress, duration: '2 Months', fee: '25000' },
  {title: 'Graphics Designing', desc: 'Core design principles with modern tools and workflows.', img: imgGraphic, duration: '2 Months', fee: '25000' },
  {title: 'Video Editing', desc: 'Edit, color-grade, and deliver professional videos.', img: imgVideoEditing, duration: '2 Months', fee: '6000' },
  {title: 'Web Designing', desc: 'Modern UI/UX design essentials and Figma workflows.', img: imgWebDesign, duration: '2 Months', fee: '25000' },
  {title: 'Spoken English', desc: 'Fluency, confidence and public speaking for global roles.', img: imgSpokenEnglish, duration: '2 Months', fee: '25000' },
  {title: 'App Development', desc: 'Mobile apps from idea to publish-ready builds.', img: imgAppDev, duration: '2 Months', fee: '25000' },
  {title: 'CIT - IT Certification', desc: 'Complete introduction to computers and information technology.', img: imgCIT, duration: '2 Months', fee: '25000' },
  {title: 'SEO', desc: 'Rank higher with on-page, off-page and technical SEO.', img: imgSEO, duration: '2 Months', fee: '25000' },
  {title: 'Social Media Marketing', desc: 'Create engaging content and drive real business outcomes.', img: imgSMM, duration: '2 Months', fee: '25000' },
  {title: 'C++ Course', desc: 'Object-oriented programming and data structures in C++.', img: imgCpp, duration: '2 Months', fee: '25000' },
  {title: 'Amazon FBA', desc: 'Product research, sourcing and launch strategies.', img: imgAmazonFBA, duration: '2 Months', fee: '37000' },
  {title: 'Amazon Virtual Assistant', desc: 'End-to-end Amazon seller account and operations.', img: imgAmazonVA, duration: '2 Months', fee: '37000' },
  {title: 'Java Course', desc: 'Core to OOP Java programming for robust applications.', img: imgJava, duration: '2 Months', fee: '25000' },
  {title: 'Digital Marketing', desc: '360° strategy: content, paid ads, analytics, automation.', img: imgDigitalMarketing, duration: '2 Months', fee: '37000' }
];


const BCBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = document.documentElement.scrollHeight || window.innerHeight);

    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 8000), 160);
    const connectionDistance = 180;
    const speed = 0.6;

    const colors = ['#15ADA7', '#3789B1'];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.radius = Math.random() * 2 + 1.5;
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
            ctx.strokeStyle = '#15ADA7';
            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.4;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.documentElement.scrollHeight || window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="bc-bg-canvas" />;
};

const BasicCertification = () => {
  return (
    <div className="basic-certification-page">
      <div className="bc-bg-wrapper">
        <div className="bc-mesh-gradient" />
        <BCBackground />
      </div>
      <div className="bc-hero"></div>
      <section className="bc-container">
        <header className="bc-header">
          <h1>Professional Certifications</h1>
          <p>
            Explore our curated selection of industry-recognized certifications designed to
            elevate your professional profile and open new doors in your career.
          </p>
          <div className="bc-divider" />
        </header>

        <div className="bc-grid">
          {basicCerts.map((c, i) => (
            <article className="bc-card" key={c.title + i}>
              <div className="bc-card-media">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="bc-card-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="bc-card-details">
                  <div className="bc-detail-row">
                    <span className="bc-label">Duration:</span>
                    <span className="bc-value">{c.duration}</span>
                  </div>
                  <div className="bc-detail-row">
                    <span className="bc-label">Fee:</span>
                    <span className="bc-value">{c.fee}</span>
                  </div>
                </div>
                <div className="bc-card-footer">
                  <Link to="/apply" className="bc-btn">Apply Now</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BasicCertification;
