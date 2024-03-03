import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavigationBar() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/vets">Vets Near You</Link>
        <Link to="/login">Login</Link>
        {/* Add other links */}
      </nav>
    );
  }
  
export default NavigationBar;