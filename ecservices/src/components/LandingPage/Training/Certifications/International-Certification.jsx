import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './International-Certification.css';
import imgRedHat from '../../../../assets/Images/Int-Cert/redhat.jpeg';
import imgECouncil from '../../../../assets/Images/Int-Cert/ec-council.jpeg';
import imgComptia from '../../../../assets/Images/Int-Cert/comptia.jpeg';
import imgCertNexus from '../../../../assets/Images/Int-Cert/certnexus.jpeg';
import imgMicrosoft from '../../../../assets/Images/Int-Cert/microsoft.jpeg';
import imgCisco from '../../../../assets/Images/Int-Cert/cisco.jpeg';
import imgIBMQRadar from '../../../../assets/Images/Int-Cert/IBMQRadar.jpeg';
import imgISACA from '../../../../assets/Images/Int-Cert/isaca.jpeg';
import imgAWS from '../../../../assets/Images/Int-Cert/aws.jpeg';
import imgAndroid from '../../../../assets/Images/Int-Cert/android.jpeg';
import imgAutodesk from '../../../../assets/Images/Int-Cert/autodesk.jpeg';
import imgCloudNative from '../../../../assets/Images/Int-Cert/cloudnative.jpeg';
import imgCpp from '../../../../assets/Images/Int-Cert/c++course.jpeg';
import imgAmazonFBA from '../../../../assets/Images/Int-Cert/amazonfba.jpeg';
import imgAmazonVA from '../../../../assets/Images/Int-Cert/amazonva.jpeg';
import imgJava from '../../../../assets/Images/Int-Cert/java.jpeg';
import imgDigitalMarketing from '../../../../assets/Images/Int-Cert/digitalmarketing.jpeg';

const basicCerts = [
  {title: 'RedHat', desc: 'Master enterprise Linux environments and cloud administration.', img: imgRedHat, duration: '2 Months', fee: '25000' },
  {title: 'ECouncil', desc: 'Advanced cybersecurity and ethical hacking certifications.', img: imgECouncil, duration: '2 Months', fee: '37000' },
  {title: 'CompTIA', desc: 'Industry-standard foundational skills for IT professionals.', img: imgComptia, duration: '2 Months', fee: '25000' },
  {title: 'CertNexus', desc: 'Vendor-neutral certifications for emerging technologies.', img: imgCertNexus, duration: '2 Months', fee: '25000' },
  {title: 'Microsoft', desc: 'Master cloud, data, and workplace productivity solutions.', img: imgMicrosoft, duration: '2 Months', fee: '25000' },
  {title: 'Cisco', desc: 'Build and manage scalable networking and security systems.', img: imgCisco, duration: '2 Months', fee: '6000' },
  {title: 'IBM QRadar', desc: 'Security intelligence and threat detection with SIEM.', img: imgIBMQRadar, duration: '2 Months', fee: '25000' },
  {title: 'ISACA', desc: 'Governance, risk management, and cybersecurity audit.', img: imgISACA, duration: '2 Months', fee: '25000' },
  {title: 'AWS', desc: 'Design and deploy scalable solutions on Amazon Web Services.', img: imgAWS, duration: '2 Months', fee: '25000' },
  {title: 'Android', desc: 'Develop high-performance mobile apps for Android devices.', img: imgAndroid, duration: '2 Months', fee: '25000' },
  {title: 'Autodesk', desc: 'Professional design and engineering with AutoCAD and Maya.', img: imgAutodesk, duration: '2 Months', fee: '25000' },
  {title: 'Cloud Native', desc: 'Modern software architecture for distributed cloud systems.', img: imgCloudNative, duration: '2 Months', fee: '25000' },
  {title: 'C++', desc: 'Object-oriented programming and data structures in C++.', img: imgCpp, duration: '2 Months', fee: '25000' },
  {title: 'Amazon FBA', desc: 'Product research, sourcing and launch strategies.', img: imgAmazonFBA, duration: '2 Months', fee: '37000' },
  {title: 'Amazon Virtual Assistant', desc: 'End-to-end Amazon seller account and operations.', img: imgAmazonVA, duration: '2 Months', fee: '37000' },
  {title: 'Java', desc: 'Core to OOP Java programming for robust applications.', img: imgJava, duration: '2 Months', fee: '25000' },
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

const InternationalCertification = () => {
  return (
    <div className="international-certification-page">
      <div className="bc-bg-wrapper">
        <div className="bc-mesh-gradient" />
        <BCBackground />
      </div>
      <div className="bc-hero"></div>
      <section className="bc-container">
        <header className="bc-header">
          <h1>International Certifications</h1>
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

export default InternationalCertification;
