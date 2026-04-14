import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import AIWebBackground from './AIWebBackground';
import Footter from './Footter';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    // Add API call here
    alert('Message Sent Successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-us-page">
      <AIWebBackground />
      <Navbar />
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Reach out to us for any queries or support.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          
          {/* Left Side: Contact Info */}
          <div className="contact-info-column">
            <h2 className="column-title">Contact Information</h2>
            
            <div className="info-card">
              <div className="info-icon location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="info-text">
                <h3>Our Location</h3>
                <p>Suite No. 3, Block-26 G-7/1,<br/>Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon email-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="info-text">
                <h3>Email Us</h3>
                <p><a href="mailto:info@ecservices.pk">info@ecservices.pk</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon phone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="info-text">
                <h3>Call Us</h3>
                <p><a href="tel:+92518749532">+92-51-8749532</a></p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-column">
            <div className="form-card-contact">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row-contact">
                  <div className="form-group-contact">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group-contact">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-group-contact">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    placeholder="How can we help?"
                  />
                </div>

                <div className="form-group-contact">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Write your message here..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="send-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.206606622616!2d73.05562731520606!3d33.70356598070222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb0b0b0b0b0%3A0x0!2zMzPCsDQyJzEyLjgiTiA3M8KwMDMnMjguMiJF!5e0!3m2!1sen!2s!4v1626100000000!5m2!1sen!2s" 
              width="100%" 
              height="400" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="ECS Location"
            ></iframe>
          </div>
        </div>
      </div>
      <Footter />
    </div>
  );
};

export default ContactUs;
