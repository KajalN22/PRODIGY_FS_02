import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './Navbar.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Homepage Content */}
      <div className="content">
        <h1>Welcome to the Employee Management System</h1>
        <h2>Manage employees efficiently and effectively</h2>
      </div>
    </div>
  );
};

export default Homepage;
