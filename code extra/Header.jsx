import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bgImage = {
    backgroundImage: isMobile
    ? "url('/images/ev bg .png')" // mobile version
     : "url('/images/ev bg .png')"       // desktop version
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hero-wrapper" style={bgImage}>
      {/* TOP NAVIGATION */}
      <header className="evgo-navbar">
        <div className="nav-outer">
          {/* LOGO LEFT */}
          <div className="logo" onClick={scrollToTop}>
           <span className="ev">EVgo.</span><span className="bh">BH</span>
          </div>


          {/* CENTERED NAV MENU */}
          <nav className="menu-center">
            <a href="#home">Home</a>
            <a href="#stations">Charging Stations</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#login">LOGIN</a>
          </nav>

          {/* TOGGLE RIGHT */}
          <div className="toggle-icon" onClick={() => setMenuOpen(true)}>☰</div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div className={`sidebar-menu ${menuOpen ? 'active' : ''}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#stations">Charging Stations</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#login">LOGIN</a>
        </nav>
      </div>



      {/* HERO TEXT SECTION */}
      <div className="hero-content">
        <h1>
          Locate EV Chargers Across the Kingdom
        </h1>
        <p>
          Easily find nearby charging stations for your electric vehicle.<br />
          Real-time details, directions, and station info fast and reliable.
        </p>


      </div>
    </div>
  );
};

export default Header;
