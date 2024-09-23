import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand animate__animated animate__fadeInLeft" href="#">PlatformName</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item animate__animated animate__fadeInRight">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item animate__animated animate__fadeInRight animate__delay-1s">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item animate__animated animate__fadeInRight animate__delay-2s">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item animate__animated animate__fadeInRight animate__delay-3s">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center text-light d-flex justify-content-center align-items-center" style={{ height: '100vh', background: 'url(https://via.placeholder.com/1920x1080) center/cover no-repeat', color: '#fff' }}>
        <div className="animate__animated animate__fadeInDown">
          <h1 className="display-4">Welcome to Our Platform</h1>
          <p className="lead">We offer the best services for your business needs</p>
          <button className="btn btn-primary btn-lg animate__animated animate__bounceIn">Get Started</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          <h2 className="animate__animated animate__fadeInUp">Our Features</h2>
          <div className="col-md-4 mb-4 animate__animated animate__zoomIn animate__delay-1s">
            <div className="card shadow-sm">
              <img src="https://i.pinimg.com/236x/3c/65/6a/3c656a9dfc46061ba1417ee76a3f040e.jpg" className="card-img-top" alt="Feature 1"/>
              <div className="card-body">
                <h5 className="card-title">Feature 1</h5>
                <p className="card-text">A brief description of the first feature.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 animate__animated animate__zoomIn animate__delay-2s">
            <div className="card shadow-sm">
              <img src="https://i.pinimg.com/236x/66/37/98/663798c719708b6d7f6446d34da40e46.jpg" className="card-img-top" alt="Feature 2"/>
              <div className="card-body">
                <h5 className="card-title">Feature 2</h5>
                <p className="card-text">A brief description of the second feature.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 animate__animated animate__zoomIn animate__delay-3s">
            <div className="card shadow-sm">
              <img src="https://media.istockphoto.com/id/468577657/photo/blonde-with-cowboy-hat-and-sunglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=a3NFYVNEyFvdmZ84SAOOzEgKZoKvbvHo-qWFGdB5a-s=" className="card-img-top" alt="Feature 3"/>
              <div className="card-body">
                <h5 className="card-title">Feature 3</h5>
                <p className="card-text">A brief description of the third feature.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="animate__animated animate__fadeInUp">What Our Clients Say</h2>
          <div id="carouselExampleControls" className="carousel slide animate__animated animate__fadeInUp animate__delay-1s" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <blockquote className="blockquote">
                  <p>"This platform has changed our business for the better!"</p>
                  <footer className="blockquote-footer">John Doe, CEO</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>"Their customer service and product quality are top-notch."</p>
                  <footer className="blockquote-footer">Jane Smith, COO</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>"Highly recommend this platform for all your needs."</p>
                  <footer className="blockquote-footer">Mike Johnson, Founder</footer>
                </blockquote>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container my-5 text-center">
        <h2 className="animate__animated animate__fadeInUp">Pricing Plans</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 animate__animated animate__flipInX animate__delay-1s">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1633734885534-43d4c66821d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpa25pfGVufDB8fDB8fHww" className="card-img-top" alt="Basic Plan"/>
              <div className="card-body">
                <h5 className="card-title">Basic Plan</h5>
                <p className="card-text">$9.99/month</p>
                <a href="#" className="btn btn-outline-primary">Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 animate__animated animate__flipInX animate__delay-2s">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1698756523291-ad39ed67025a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymlrbml8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="Premium Plan"/>
              <div className="card-body">
                <h5 className="card-title">Premium Plan</h5>
                <p className="card-text">$29.99/month</p>
                <a href="#" className="btn btn-outline-primary">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-dark text-light py-5">
        <div className="container text-center">
          <h2 className="animate__animated animate__fadeInUp">Subscribe to Our Newsletter</h2>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">Stay updated with our latest news and offers!</p>
          <form className="form-inline d-flex justify-content-center">
            <input type="email" className="form-control me-2" placeholder="Enter your email" />
            <button type="submit" className="btn btn-primary animate__animated animate__bounceIn animate__delay-2s">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-3 bg-light border-top">
        <p className="animate__animated animate__fadeIn animate__delay-3s">© 2024 Platform Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
