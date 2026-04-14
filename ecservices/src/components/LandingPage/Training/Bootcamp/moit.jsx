import React, { useEffect, useRef, useState } from 'react';
import './moit.css';

const FlowBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 60;
    const connectionDistance = 150;
    const colors = ['#108BCA', '#59BCB2'];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
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
        ctx.globalAlpha = 0.4;
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
            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.2;
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

  return <canvas ref={canvasRef} className="flow-bg-canvas-moit" />;
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const MOIT = () => {
  return (
    <div className="moit-page">
      <FlowBackground />
      
      {/* Hero Section */}
      <section className="moit-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">High Impact Skills Bootcamp Program</h1>
          <p className="hero-subtitle">by Ministry of IT & Telecommunication</p>
        </div>
      </section>

      {/* Page Navigation */}
      <nav className="moit-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#eligibility">Eligibility</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="/apply" className="enroll-link">Enroll</a></li>
        </ul>
      </nav>

      <div className="moit-container">
        {/* Overview Section */}
        <section id="overview" className="moit-section">
          <h2 className="section-header">Overview <span></span></h2>
          <div className="overview-card">
            <p>
              High Impact Skills Bootcamps for new and emerging ICT technologies are being established as a pilot project in Pakistan. These bootcamps are being organized in collaboration with service providers using the Train the Trainer (TOT) concept. The initial locations for the bootcamps are Islamabad and Karachi.
            </p>
            <p>
              Institutions and academia often face challenges in updating their curriculums and allocating resources promptly to meet the fast-growing demand for emerging technologies like Cloud Computing, Data Science (AI, ML), Cybersecurity, and Blockchain. Experts in these fields have made specific recommendations to enhance the government's efforts in improving the knowledge and skills base. The development of such skills will not only benefit the local industry but also create opportunities for exporting high-value services to international markets with high demand.
            </p>
            <p>
              The Bootcamp Service Provider is currently offering a standardized coursework and methodology that can serve as a valuable guideline for universities and other educational institutions. This guidance aims to train students for future job roles in Software Development, particularly in the domains of Cybersecurity, Cloud Computing, Artificial Intelligence (AI), and Blockchain technology. These efforts are targeted for the next decade, spanning from 2020 to 2029.
            </p>
            
            <div className="aims-block">
              <h3>High Impact Skills Bootcamp Program Aims:</h3>
              <ul className="aims-list">
                <li>
                  <span className="aim-num">1</span>
                  <p>Offer advanced and intensive training in highly sought-after technologies that can serve as a valuable guideline for universities both nationally and internationally.</p>
                </li>
                <li>
                  <span className="aim-num">2</span>
                  <p>Support the enhancement of knowledge and skills in the IT industry, academia, and public sector IT organizations, aiming to uplift the overall competency levels.</p>
                </li>
                <li>
                  <span className="aim-num">3</span>
                  <p>Implement the "Train the Trainer" concept, focusing on developing a pool of experts and intellectuals in emerging technology fields. This approach aims to create a sustainable cycle of knowledge transfer and skill development, empowering trainers to effectively disseminate their expertise to a wider audience.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="moit-section">
          <h2 className="section-header">Eligibility and Selection Criteria <span></span></h2>
          <div className="eligibility-grid">
            <div className="eligibility-card">
              <div className="card-badge">FOR FACULTY</div>
              <h3>Faculty Members of HEC Accredited University:</h3>
              <ul>
                <li>Must be a Pakistani National having valid CNIC</li>
                <li>Must have completed at least 16 years of education in information and communication technology domain</li>
                <li>Must be serving any HEC accredited university</li>
              </ul>
            </div>
            <div className="eligibility-card">
              <div className="card-badge">FOR GRADUATES</div>
              <h3>Information and Communication Technology Graduates:</h3>
              <ul>
                <li>Must be a Pakistani National having valid CNIC</li>
                <li>Must have completed at least 16 years of education in information and communication technology domain</li>
                <li>Qualify the test and interview</li>
                <li>Both employed and unemployed graduates are eligible to apply</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="moit-section">
          <h2 className="section-header">Locations <span></span></h2>
          <div className="locations-grid">
            <div className="location-card">
              <div className="loc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="loc-info">
                <span className="loc-num">01</span>
                <h3>Islamabad</h3>
              </div>
            </div>
            <div className="location-card">
              <div className="loc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="loc-info">
                <span className="loc-num">02</span>
                <h3>Karachi</h3>
              </div>
            </div>
          </div>
          
          <div className="notes-block">
            <h3>Important Notes:</h3>
            <ul className="notes-list">
              <li>
                <span className="note-dot"></span>
                <p>Upon final selection, candidates will be required to sign a Declaration Form using the prescribed format, indicating their commitment to complete the training program.</p>
              </li>
              <li>
                <span className="note-dot"></span>
                <p>We ensure equal opportunities for female applicants, promoting gender inclusivity and diversity throughout the selection process.</p>
              </li>
              <li>
                <span className="note-dot highlight"></span>
                <p><strong>Entirely free of cost:</strong> If, at any stage of the selection or training process, you are asked to pay any amount, please report it to us immediately.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="moit-section">
          <h2 className="section-header">Frequently Asked Questions <span></span></h2>
          <div className="faq-container">
            <FAQItem 
              question="1. Duration of the Training/Bootcamp?" 
              answer="The duration is 16 weeks, Five days a week and from 09:00 AM to 05:00 PM."
            />
            <FAQItem 
              question="2. Mode of training?" 
              answer="Training will be conducted Physically in Islamabad and Karachi. Venues will be accessible by public transport, however to be disclosed to shortlisted applicants."
            />
            <FAQItem 
              question="3. There are any charges for the bootcamp?" 
              answer="No, there are no charges whatsoever. The program is completely free of cost."
            />
            <FAQItem 
              question="4. What kind of certifications will be provided?" 
              answer="Training Certificate by MoIT&T and FREE exam voucher for Certified Blockchain Expert (CBE) Certification."
            />
            <FAQItem 
              question="5. Minimum Eligibility Requirement is must?" 
              answer="Yes, completion of 16 years of education is mandatory. You must also upload your Transcript or Degree on the portal."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MOIT;
