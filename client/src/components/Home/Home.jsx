import React from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400.png?text=Slide+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Platform</h3>
            <p>Discover amazing features and services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400.png?text=Slide+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Innovative Solutions</h3>
            <p>Transform your business with the latest technology.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400.png?text=Slide+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Join Us Today</h3>
            <p>Become part of our ever-growing community.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Animated Text */}
      <div className="container text-center mt-5">
        <motion.h2
          className="animated-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Amazing Features
        </motion.h2>
        <motion.p
          className="animated-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We bring you a range of innovative solutions for your business needs.
        </motion.p>
      </div>

      {/* 3D Animated Card Section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <motion.div
              className="animated-card"
              whileHover={{ scale: 1.05, rotateY: 15 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200.png?text=Card+1" />
                <Card.Body>
                  <Card.Title>Feature 1</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div
              className="animated-card"
              whileHover={{ scale: 1.05, rotateY: 15 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200.png?text=Card+2" />
                <Card.Body>
                  <Card.Title>Feature 2</Card.Title>
                  <Card.Text>
                    Nullam quis risus eget urna mollis ornare vel eu leo.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div
              className="animated-card"
              whileHover={{ scale: 1.05, rotateY: 15 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200.png?text=Card+3" />
                <Card.Body>
                  <Card.Title>Feature 3</Card.Title>
                  <Card.Text>
                    Integer posuere erat a ante venenatis dapibus posuere velit.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
