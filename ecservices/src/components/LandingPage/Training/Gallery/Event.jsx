import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Event.css';

// Hero background image (technology/events themed)
import heroImg from '../../../../assets/Images/Events/Event1.png';

// Event card images
import moit1 from '../../../../assets/Images/Events/MOIT1.png';
import cd1 from '../../../../assets/Images/Events/CD1.png';
import ignite1 from '../../../../assets/Images/Events/IGNITE1.png';
import navttc1 from '../../../../assets/Images/Events/NAVTTC1.png';
import ppp1 from '../../../../assets/Images/Events/PPP1.png';
import cs1 from '../../../../assets/Images/Events/CS1.png';
import pseb1 from '../../../../assets/Images/Events/PSEB1.png';

const EVENTS = [
  {
    title: 'Ministry of IT Training',
    desc: 'In collaboration with the Ministry of IT & Telecom (MOITT) and supported by the Higher Education Commission, we deliver industry-focused boot camps in Blockchain, Data Science, and Cloud-Native Computing to build national capacity and drive Pakistan\'s digital economy.',
    to: '/moitt',
  },
  {
    title: 'Cabinet Division',
    desc: 'We delivered advanced cybersecurity and digital governance training for Cabinet Division, equipping civil and defence professionals to address cyber threats, strengthen data security, and enhance institutional resilience.',
    to: '/cabinet-division',
  },
  {
    title: 'IGNITE',
    desc: 'In collaboration with IGNITE, we conducted nationwide cybersecurity training and hackathons, training over 3,500 participants. These programs built advanced skills, ethical hacking expertise, and a strong, innovation-driven cybersecurity culture across Pakistan.',
    to: '/ignite',
  },
  {
    title: 'NAVTTC',
    desc: 'In collaboration with NAVTTC, we delivered hands-on technical training programs to equip over 500 youth with industry-aligned, employable skills, boosting employability and national skills development.',
    to: '/navttc',
  },
  {
    title: 'Public Private Partnership',
    desc: 'In partnership with the District Government Attock, we established the District Public Institute of Science and Technology (DPIST), a modern, globally-aligned institute promoting academic excellence, research, and innovation. ',
    to: '/ppp',
  },
  {
    title: 'AJK First Cyber Security Hackhthon',
    desc: 'EC Services conducted the AJK Cybersecurity Bootcamp, training 100 participants in practical cybersecurity skills through hands-on, expert-led sessions. The program, recognized by top regional dignitaries, strengthened technical capacity to address emerging cyber threats. ',
    to: '/cshackathon',
  },
  {
    title: 'PSEB E-Rozgar Center',
    desc: 'EC Services established Pakistan\'s first E-Rozgar Center through a public-private partnership, providing freelancers with training, mentorship, and resources to enhance digital skills and productivity. Inaugurated by Umer Saif, the center supports digital entrepreneurship and contributes to the national digital economy.',
    to: '/pseb',
  },
];

const EVENT_IMAGES = [moit1, cd1, ignite1, navttc1, ppp1, cs1, pseb1];

const Event = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    revealEls.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="event-page" aria-label="Events and Collaborations">
      {/* Hero Section */}
      <section
        className="event-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(3,105,161,0.75), rgba(13,148,136,0.65)), url(${heroImg})`,
        }}
      >
        <div className="event-hero-content reveal-on-scroll">
          <h1 className="event-title">Our Events & Collaborations</h1>
          <p className="event-subtitle">
            Strategic partnerships, national programs, and future-ready training initiatives advancing Pakistan’s
            digital transformation.
          </p>
        </div>
        <div className="event-hero-overlay" aria-hidden="true" />
      </section>

      {/* Divider */}
      <div className="event-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--event-primary)" fillOpacity="0.06" d="M0,64L1440,0L1440,72L0,72Z" />
        </svg>
      </div>

      {/* Achievements Section */}
      <section className="event-achievements section-padding reveal-on-scroll">
        <div className="event-container">
          <h2 className="section-heading">Our Achievements</h2>
          <div className="section-heading-line"></div>
          <p className="section-lead">
           Through strategic collaborations with MOITT, HEC, Cabinet Division, IGNITE, NAVTTC, PSEB, and leading public and private universities, EC Services has successfully delivered national-level capacity building initiatives in emerging technologies, cybersecurity, governance, and digital skills. Our programs—including high-impact boot camps, specialized government trainings, freelancing enablement, and nationwide hackathons—have trained and empowered over 4,000+ participants across Pakistan, comprising faculty members, IT specialists, civil and defence personnel, youth, and freelancers. These achievements reflect our proven ability to execute large-scale, high-impact programs that strengthen institutional capacity, enhance employability, and contribute to Pakistan's digital and economic transformation.
          </p>
        </div>
      </section>

      {/* Initiatives / Events Cards */}
      <section className="event-cards section-padding reveal-on-scroll">
        <div className="event-container">
          <div className="cards-grid" role="list" aria-label="Initiatives and Events">
            {EVENTS.map((item, idx) => (
              <article key={item.title} className="event-card" role="listitem">
                <img
                  src={EVENT_IMAGES[idx]}
                  alt={`${item.title}`}
                  className="event-card-image"
                />
                <div className="event-card-content">
                  <h3 className="event-card-title">{item.title}</h3>
                  <p className="event-card-desc">{item.desc}</p>
                  <div className="event-card-actions">
                    <Link className="btn-primary" to={item.to} aria-label={`Apply for ${item.title}`}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Event;
