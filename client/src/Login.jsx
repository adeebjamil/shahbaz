import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'animate.css'; // Import animate.css
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './Login.css'; // Custom CSS for login page styling

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === "success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="form-container bg-white p-4 rounded-5 animate__animated animate__fadeInUp">
        {/* Optional logo or image */}
        <div className="text-center mb-3">
          <img
            src="https://imgs.search.brave.com/mL-2zte6R6JhlqP4aTquVv359jIXc8IzWyfwnVWi_Ko/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzk2LzE5LzQ4/LzM2MF9GXzE5NjE5/NDgwMV9WZnk1V0k4/ZElUNTY5MGZrUU95/ZVBMdUJIVUpoM1J6/UC5qcGc"
            alt="Logo"
            className="img-fluid logo-img animate__animated animate__zoomIn"
          />
        </div>
        <h2 className="text-center animate__animated animate__fadeInDown">Login</h2>
        <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
          <div className="mb-3 animate__animated animate__fadeInLeft animate__delay-1s">
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

          <div className="mb-3 animate__animated animate__fadeInLeft animate__delay-2s">
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

          <button
            type="submit"
            className="btn btn-success w-100 rounded-0 animate__animated animate__pulse animate__delay-3s"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3 animate__animated animate__fadeInUp">Don't have an account?</p>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none animate__animated animate__fadeInUp animate__delay-4s"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
