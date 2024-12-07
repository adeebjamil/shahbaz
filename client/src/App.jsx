import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Ensure dark/light theme styles are defined here
import Navbar from './components/Navbar/Navbar';  // Ensure the path is correct
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply dark/light theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <BrowserRouter>
      {/* Render Navbar only once */}
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
