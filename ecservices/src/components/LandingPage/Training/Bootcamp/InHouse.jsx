import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InHouse.css';
import trainingImg from '../../../../assets/Images/Training.jpeg';

const InHouse = () => {
    const navigate = useNavigate();

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const trainingDomains = [
        { title: "Cyber Security", icon: "security" },
        { title: "Data Science", icon: "analytics" },
        { title: "Blockchain", icon: "link" },
        { title: "Cloud / DevOps", icon: "cloud" },
        { title: "AI & Machine Learning", icon: "psychology" }
    ];

    return (
        <div className="inhouse-page">
            {/* 1. Hero Section */}
            <section className="inhouse-hero">
                <div className="inhouse-container hero-grid">
                    <div className="hero-content">
                        <span className="hero-badge">Corporate Solutions</span>
                        <h1>In-House Corporate Bootcamp Training</h1>
                        <p>Upskill your workforce with our comprehensive, customized corporate training programs designed to foster innovation and technical proficiency directly at your organization.</p>
                        <div className="hero-actions">
                            <button className="btn-primary" onClick={() => navigate('/contact')}>Request Training Proposal</button>
                            <button className="btn-secondary" onClick={() => navigate('/contact')}>Schedule Consultation</button>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src={trainingImg} alt="Corporate Training Session" className="hero-image" />
                        <div className="hero-glow"></div>
                    </div>
                </div>
            </section>

            {/* 2. Overview Section */}
            <section className="inhouse-overview">
                <div className="inhouse-container overview-grid">
                    <div className="overview-text">
                        <h2>Why Choose ECS In-House Training?</h2>
                        <p>We bring world-class technical education directly to your teams. Our training solutions are tailored to meet the specific needs of your industry and business objectives.</p>
                    </div>
                    <div className="overview-features">
                        <div className="feature-item">
                            <div className="feature-check">✔</div>
                            <span>Customized training aligned to organization goals</span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-check">✔</div>
                            <span>Delivered onsite / hybrid / remote</span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-check">✔</div>
                            <span>Hands-on practical learning approach</span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-check">✔</div>
                            <span>Flexible scheduling for teams</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Training Solutions Cards */}
            <section className="inhouse-solutions">
                <div className="inhouse-container">
                    <div className="section-header">
                        <h2>Our Training Solutions</h2>
                        <p>Comprehensive programs designed for the modern enterprise.</p>
                    </div>
                    <div className="solutions-grid">
                        <div className="solution-card">
                            <div className="card-icon bg-blue">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                            </div>
                            <h3>Corporate Training Programs</h3>
                            <p>Structured bootcamps that take your team from fundamentals to advanced concepts in weeks.</p>
                        </div>
                        <div className="solution-card">
                            <div className="card-icon bg-teal">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                            </div>
                            <h3>Customizable Learning Paths</h3>
                            <p>Curriculums tailored to your specific tech stack, project requirements, and skill gaps.</p>
                        </div>
                        <div className="solution-card">
                            <div className="card-icon bg-accent">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            </div>
                            <h3>Flexible Delivery Options</h3>
                            <p>Choose between onsite intensive workshops, virtual classrooms, or hybrid models.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Training Domains Grid */}
            <section className="inhouse-domains">
                <div className="inhouse-container">
                    <div className="section-header">
                        <h2>Training Domains</h2>
                        <p>Expertise across the most in-demand technologies.</p>
                    </div>
                    <div className="domains-grid">
                        {trainingDomains.map((domain, index) => (
                            <div key={index} className="domain-card">
                                <h3>{domain.title}</h3>
                                <button className="btn-link">Learn More →</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Process Flow */}
            <section className="inhouse-process">
                <div className="inhouse-container">
                    <div className="section-header">
                        <h2>How It Works</h2>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h4>Requirement Discussion</h4>
                            <p>We analyze your team's current skills and goals.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h4>Curriculum Customization</h4>
                            <p>We design a program that fits your exact needs.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h4>Training Delivery</h4>
                            <p>Expert instructors deliver hands-on sessions.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <h4>Performance Evaluation</h4>
                            <p>We assess progress and ensure learning outcomes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA Banner */}
            <section className="inhouse-cta">
                <div className="inhouse-container cta-banner">
                    <div className="cta-content">
                        <h2>Ready to Upskill Your Team with ECS?</h2>
                        <p>Transform your workforce efficiency today.</p>
                    </div>
                    <div className="cta-buttons">
                        <button className="btn-outline-white" onClick={() => navigate('/apply')}>Apply Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InHouse;
  