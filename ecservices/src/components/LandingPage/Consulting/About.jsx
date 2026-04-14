import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Users, BookOpen, Calendar, GraduationCap, Zap, ShieldCheck, UserCheck, Briefcase, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footter from './Footter';
import AIWebBackground from './AIWebBackground';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const statsRef = useRef(null);
  const techRef = useRef(null);
  const importantRef = useRef(null);
  const logosRef = useRef(null);


  useGSAP(() => {
    // Determine the scroll container: prioritize the closest scrollable parent or window
    const scroller = containerRef.current?.closest('.modal-content') || window;

    // 1. "Who We Are" Section Animations
    const whoTl = gsap.timeline({
      scrollTrigger: {
        trigger: whoWeAreRef.current,
        scroller: scroller,
        start: 'top 80%',
      }
    });

    whoTl.from('.who-content', { 
      x: -80, 
      opacity: 0, 
      duration: 1, 
      ease: 'power3.out' 
    })
    .from('.who-image-container', { 
      x: 80, 
      opacity: 0, 
      duration: 1, 
      ease: 'power3.out' 
    }, '<0.25')
    .from('.years-badge', {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.5')
    .from('.strengths-list li', {
      x: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.8');

    // 2. Stats Section Animations
    const statsTl = gsap.timeline({
      scrollTrigger: {
        trigger: statsRef.current,
        scroller: scroller,
        start: 'top 85%',
      }
    });

    statsTl.from('.stat-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // Count up animation for numbers inside stats
    gsap.utils.toArray('.stat-number-value').forEach((el) => {
      const targetVal = parseFloat(el.getAttribute('data-value'));
      gsap.fromTo(el, 
        { innerText: 0 }, 
        {
          innerText: targetVal,
          duration: 1.8,
          ease: 'power1.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            scroller: scroller,
            start: 'top 85%'
          }
        }
      );
    });



    gsap.to('.tech-image-float', {
      y: 8,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    // 4. What's Important To Us Section Animations
    gsap.from('.important-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: importantRef.current,
        scroller: scroller,
        start: 'top 85%'
      }
    });



    // 4. Tech Section Animations
    const techTl = gsap.timeline({
      scrollTrigger: {
        trigger: techRef.current,
        scroller: scroller,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    techTl.fromTo('.tech-image-wrapper', 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
      }
    )
    .from('.tech-icon-corner', {
      scale: 0,
      rotate: -45,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.6')
    .from('.vertical-line', {
      height: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.8')
    .from('.tech-content-col > *', {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=1');

    // 5. Partners Section Animations
    const partnersTl = gsap.timeline({
      scrollTrigger: {
        trigger: logosRef.current,
        scroller: scroller,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });

    partnersTl.fromTo('.partners-header > *', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      }
    )
    .fromTo('.logo-tier-1 img',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      },
      '-=0.4'
    );



  }, { scope: containerRef });

  const statsData = [
    { icon: Users, label: 'STUDENTS', value: 1232 },
    { icon: BookOpen, label: 'COURSES', value: 64 },
    { icon: Calendar, label: 'EVENTS', value: 42 },
    { icon: GraduationCap, label: 'TRAINERS', value: 15 },
  ];

  const philosophyData = [
    {
      icon: ShieldCheck,
      title: 'CREDIBILITY',
      desc: 'The trust is between us and our partners and the confidence in delivering of what is distinctive and the best.'
    },
    {
      icon: UserCheck,
      title: 'CONFIDENCE',
      desc: 'Professional performance based on specialists in each field with experience and high scientific qualifications, locally and internationally.'
    },
    {
      icon: Briefcase,
      title: 'PROFESSIONALISM',
      desc: 'Creating new ways to deliver our services through continuous development, following up and updating the latest technology.'
    },
    {
      icon: Lightbulb,
      title: 'INNOVATION',
      desc: 'The credibility of the educational material, knowledge, skill and all the services of our institute by adopting the actual rules and standards as well.'
    }
  ];

  return (
    <div className="about-ecs-page" ref={containerRef}>
      <AIWebBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero" style={{ background: 'linear-gradient(135deg, #046E9A, #0A7A7A)' }}>
        <div className="about-hero-content">
          <h1>About ECS</h1>
          <p>
            A global leader in consultancy and business process outsourcing, 
            dedicated to empowering organizations through innovation and excellence.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-who-we-are" ref={whoWeAreRef}>
        <div className="about-container">
          <div className="who-grid">
            <div className="who-content">
              <span className="section-badge">WHO WE ARE</span>
              <h2>Empowering Organizations to<br/><span className="text-blue">Achieve Their Vision.</span></h2>
              <p className="who-desc">
                ECS has helped organizations assess how to maximize their performance and 
                worked with them to achieve their vision. Our strategy is focused on helping clients 
                improve their operational performance, deliver their products and services more 
                effectively and efficiently, and grow their businesses in existing and new markets.
              </p>
              
              <h4 className="strengths-title">Our Strengths include:</h4>
              <ul className="strengths-list">
                <li><i className="check-icon" />Maintaining a professional ethical image.</li>
                <li><i className="check-icon" />Delivering on what was promised.</li>
                <li><i className="check-icon" />Thinking of the whole and not just the short term.</li>
                <li><i className="check-icon" />Industry Expertise and knowledge.</li>
                <li><i className="check-icon" />Our Strategic Alliance with Global Partners.</li>
              </ul>
            </div>
            
            <div className="who-image-container">
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" alt="Desk with Laptop" />
                <div className="years-badge">
                  <div className="badge-number">10+</div>
                  <div className="badge-text">
                    <strong>Years of Excellence</strong>
                    <br />Since 2010
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats" ref={statsRef}>
        <div className="about-container">
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div 
                className="stat-card" 
                key={index}
              >
                <div className="stat-icon-wrapper">
                  <stat.icon size={26} strokeWidth={2} />
                </div>
                <div className="stat-number">
                  <span className="stat-number-value" data-value={stat.value}>0</span>
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="about-tech" ref={techRef}>
        <div className="about-container">
          <div className="tech-inner">
            <div className="tech-image-col">
              <div className="tech-icon-corner">
                <Zap size={24} fill="currentColor" />
              </div>
              <div className="tech-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Technology Solution" 
                  className="tech-image-float" 
                />
              </div>
            </div>
            <div className="tech-content-col">
              <div className="mission-badge-row">
                <div className="vertical-line"></div>
                <span className="section-badge">OUR MISSION</span>
              </div>
              <h2>World-Class <span className="text-teal">Technology<br/>& Solutions.</span></h2>
              <p>
                Our mission is to be a high-integrity partner, providing world-class 
                technology brands and solutions into emerging markets and focusing 
                on customer satisfaction. EC Services (Private.) Ltd provides a 
                comprehensive set of services to support the design, installation, 
                operation and management of IT.
              </p>
              <button className="btn-learn-more">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy" ref={importantRef}>
        <div className="about-container">
          <div className="philosophy-header">
            <span className="section-badge">OUR PHILOSOPHY</span>
            <h2>What's Important To Us</h2>
            <div className="section-underline">
              <span className="line-teal"></span>
              <span className="line-green"></span>
            </div>
          </div>
          
          <div className="philosophy-grid">
            {philosophyData.map((item, index) => (
              <motion.div 
                className="philosophy-card" 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="philosophy-icon-bg">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="about-partners" ref={logosRef}>
        <div className="about-container">
          <div className="partners-header">
            <span className="section-badge center-badge">OUR NETWORK</span>
            <h2 className="partners-title">Trusted by Global Leaders</h2>
          </div>
          
          <div className="logos-row logo-tier-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" />
          </div>
        </div>
      </section>


      
      <Footter />
    </div>
  );
};

export default About;
