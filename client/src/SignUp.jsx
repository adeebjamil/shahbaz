import React, { useState } from "react";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'animate.css'; // Import animate.css
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './SignUp.css'; // Custom styles


=======
import { Link } from "react-router-dom";
import axios from "axios";
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const navigate = useNavigate();
=======
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/register", { name, email, password })
<<<<<<< HEAD
      .then(res => console.log(res), navigate("/login"))
=======
      .then(res => console.log(res)) //login path
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea
      .catch(err => console.log(err));
  };

  return (
<<<<<<< HEAD
    <div className="signup-container d-flex justify-content-center align-items-center vh-100">
      <div className="form-container bg-white p-4 rounded-5 animate__animated animate__fadeInUp">
        {/* Optional logo or image inside the form */}
        <div className="text-center mb-3">
          <img
            src="https://imgs.search.brave.com/OjJtj1gYxLnfEW9CD6qrumi3F_LEe3mKP1DzQmL35zU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXhj/ZG4uaWNvbnM4LmNv/bS9wYWNrcy9wcmV2/aWV3LWljb24vcHJv/ZmlsZS5zdmc"
            alt="Logo"
            className="img-fluid logo-img animate__animated animate__bounceIn"
          />
        </div>
        <h2 className="text-center animate__animated animate__fadeInDown">Register</h2>
        <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
          <div className="mb-3 animate__animated animate__fadeInLeft animate__delay-0.5s">
=======
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded-0 w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea
            <label className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

<<<<<<< HEAD
          <div className="mb-3 animate__animated animate__fadeInLeft animate__delay-2s">
=======
          <div className="mb-3">
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea
            <label className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

<<<<<<< HEAD
          <div className="mb-3 animate__animated animate__fadeInLeft animate__delay-3s">
=======
          <div className="mb-3">
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

<<<<<<< HEAD
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0 animate__animated animate__pulse animate__delay-4s"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3 animate__animated animate__fadeInUp">Already have an account?</p>
        <Link
          to={"/login"}
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none animate__animated animate__fadeInUp animate__delay-5s"
=======
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already have an account?</p>
        <Link
          to={"/login"}
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
