import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const bgImage = {
    backgroundImage: "url('/images/Snapchat-1743042214.jpg')"
  };

  return (
    <div className="hero-wrapper" style={bgImage}>
      <header className="evgo-navbar">
        {/* Desktop nav */}
        <nav className="menu-center">
          <a href="#">Map</a>
          <a href="#">Stations</a>
          <a href="#">Solutions</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        {/* Mobile toggle icon (right side) */}
        <div className="toggle-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </header>

      {/* Mobile sidebar */}
      <div className={`sidebar-menu ${menuOpen ? 'active' : ''}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>
        <nav>
          <a href="#">Map</a>
          <a href="#">Stations</a>
          <a href="#">Solutions</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      {/* Logo and content */}
      <div className="logo-box-left">
        <div className="logo">EVGO.<span>BH</span></div>
      </div>

      <div className="hero-content">
        <h1>List of charging stations for electric vehicles in Bahrain.</h1>
        <p>Find the nearest EV charger for your electric car in Bahrain</p>
      </div>
    </div>
  );
};

export default Header;
