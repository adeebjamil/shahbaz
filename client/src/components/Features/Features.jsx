import React from 'react';
import './Features.css'; // Import custom CSS
import { FaGithub, FaTrafficLight, FaCloudSun, FaParking, FaChartLine, FaRobot } from 'react-icons/fa'; // Icons from react-icons

const Features = () => {
  return (
    <div>
      {/* Render Navbar at the top */}
     

      {/* Hero Image Section */}
      <div className="hero-image animate__animated animate__fadeIn">
        <div className="hero-text">
          <h1>Our Features</h1>
          <p>Explore our latest and innovative solutions</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section container">
      <h2 className="section-title animate__animated animate__fadeInUp animate__delay-1s">
        <span className="highlight-text">Our Cutting-edge Features</span>
      </h2>


        {/* Real-time Traffic Monitoring */}
        <div className="feature-item animate__animated animate__fadeInLeft">
          <img
            src="https://www.itl.cat/pngfile/big/108-1088633_real-time-traffic-monitoring-systems.jpg"
            alt="Real-time Traffic Monitoring"
            className="feature-image"
          />
          <div className="feature-content">
            <h3><FaTrafficLight className="icon" /> Real-time Traffic Monitoring</h3>
            <p>
              Our Real-time Traffic Monitoring system helps you track traffic conditions instantly. Whether it's avoiding congestion, monitoring busy intersections, or keeping the flow smooth during peak hours, this feature ensures that you are always informed and up-to-date with the latest traffic data.
            </p>
            <a href="#" className="btn btn-primary know-more-btn">Know More</a>
            <a href="https://github.com/yourusername/traffic-monitoring" className="github-link">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>

        {/* Weather Dashboard */}
        <div className="feature-item animate__animated animate__fadeInRight">
          <img
            src="https://www.allianzcare.com/content/dam/onemarketing/azcare/allianzcare/corporate/weather-forecast.jpg"
            alt="Weather Dashboard"
            className="feature-image"
          />
          <div className="feature-content">
            <h3><FaCloudSun className="icon" /> Weather Dashboard</h3>
            <p>
              Stay ahead of the weather with our dynamic Weather Dashboard. Featuring real-time updates on temperature, humidity, and forecasts, it allows users to prepare for any weather condition. Whether you’re planning a trip or just want to know if you need an umbrella, we’ve got you covered.
            </p>
            <a href="#" className="btn btn-primary know-more-btn">Know More</a>
            <a href="https://github.com/yourusername/weather-dashboard" className="github-link">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>

        {/* Smart Parking */}
        <div className="feature-item animate__animated animate__fadeInLeft">
          <img
            src="https://www.researchsnipers.com/wp-content/uploads/2019/10/smart-parking-system.jpg"
            alt="Smart Parking"
            className="feature-image"
          />
          <div className="feature-content">
            <h3><FaParking className="icon" /> Smart Parking</h3>
            <p>
              Say goodbye to parking hassles with our Smart Parking feature. Using advanced sensors and real-time data, it helps you find available parking spots quickly and efficiently. With navigation directly to free spots and parking availability alerts, it makes urban commuting stress-free.
            </p>
            <a href="#" className="btn btn-primary know-more-btn">Know More</a>
            <a href="https://github.com/yourusername/smart-parking" className="github-link">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>

        {/* Advanced Data Analytics */}
        <div className="feature-item animate__animated animate__fadeInRight">
          <img
            src="https://www.insiderintelligence.com/sites/default/files/2023-01/Data_Analytics-min_1.jpg"
            alt="Data Analytics"
            className="feature-image"
          />
          <div className="feature-content">
            <h3><FaChartLine className="icon" /> Advanced Data Analytics</h3>
            <p>
              Leverage the power of data with our Advanced Data Analytics feature. Get in-depth insights, trends, and actionable data to help you make informed decisions. From user behavior to system performance, we provide comprehensive analytics that enhance productivity and efficiency.
            </p>
            <a href="#" className="btn btn-primary know-more-btn">Know More</a>
            <a href="https://github.com/yourusername/data-analytics" className="github-link">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>

        {/* AI-Powered Automation */}
        <div className="feature-item animate__animated animate__fadeInLeft">
          <img
            src="https://www.investopedia.com/thmb/ZCRph1eGFpfRP7h4_egUcT-t3Zc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AI-robot-arm-automating-computerized-factory-processes-915752344-5baeb55d46e0fb0026751fdd.jpg"
            alt="AI Automation"
            className="feature-image"
          />
          <div className="feature-content">
            <h3><FaRobot className="icon" /> AI-Powered Automation</h3>
            <p>
              Harness the power of AI to automate tasks and processes seamlessly. Our AI-Powered Automation feature optimizes workflows and reduces manual efforts, allowing your business to scale efficiently and effectively.
            </p>
            <a href="#" className="btn btn-primary know-more-btn">Know More</a>
            <a href="https://github.com/yourusername/ai-automation" className="github-link">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
