import React, { useState } from 'react';
// Import Navbar
import emailjs from 'emailjs-com'; // Import Email.js service
import './Contact.css'; // Import custom CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
        },
        (error) => {
          setStatus('Error sending message, please try again.');
        }
      );
  };

  return (
    <div>
      {/* Render Navbar at the top */}
      

      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-text animate__animated animate__fadeIn animate__delay-1s">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container container">
        <h2 className="section-title">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form animate__animated animate__fadeInUp animate__delay-2s">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
