// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
          <span><strong>DocuWell</strong></span>
        </div>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link"> Patient Login</Link>
          <Link to="/logout" className='nav-link'>Logout</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/patient-dashboard" className="nav-link">Patient Dashboard</Link> {/* Link to PatientDashboard */}
          <Link to="/doctor-dashboard" className="nav-link">Doctor Dashboard</Link> {/* Link to DoctorDashboard */}
          <Link to="/Chatbot" className="nav-link">Chatbot</Link> {/* Link to PatientDashboard */}
        </div>
        <button className="navbar-toggler" onClick={toggleNavbar}>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
