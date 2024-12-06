import React from 'react';

import './About.css'; // Import custom CSS

const About = () => {
  return (
    <div>
      {/* Render Navbar at the top */}
      

      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-text animate__animated animate__fadeIn animate__delay-1s">
          <h1>About Us</h1>
          <p>We innovate, we create, we lead</p>
        </div>
      </div>

      {/* About Content Section */}
      <div className="about-content container">
        <div className="about-section animate__animated animate__fadeInUp animate__delay-2s">
          <h2 className="section-title">Who We Are</h2>
          <p>
            We are a technology-driven company focused on delivering innovative solutions that solve real-world problems. Our team is passionate about pushing the boundaries of what's possible and creating value through cutting-edge products and services.
          </p>
        </div>

        <div className="about-section animate__animated animate__fadeInUp animate__delay-3s">
          <h2 className="section-title">Our Mission</h2>
          <p>
            Our mission is to empower businesses by providing state-of-the-art technology solutions that foster growth, efficiency, and sustainability. We strive to be a global leader in tech innovation while ensuring that our solutions are accessible to all.
          </p>
        </div>

        <div className="about-section animate__animated animate__fadeInUp animate__delay-4s">
          <h2 className="section-title">Our Vision</h2>
          <p>
            Our vision is to create a world where technology connects people and businesses seamlessly. We aim to continuously improve the way we work, live, and interact, ensuring that our products have a positive impact on society.
          </p>
        </div>

        <div className="about-section animate__animated animate__fadeInUp animate__delay-5s">
          <h2 className="section-title">Our Values</h2>
          <ul className="values-list">
            <li>Innovation: Continuously pushing the limits of technology.</li>
            <li>Integrity: Always operating with honesty and transparency.</li>
            <li>Excellence: Delivering top-tier solutions and services.</li>
            <li>Collaboration: Working together to achieve common goals.</li>
            <li>Customer Focus: Putting the needs of our clients first.</li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section container animate__animated animate__fadeInUp animate__delay-6s">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
