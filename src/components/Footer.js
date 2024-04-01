import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <div className=<img src="/path/to/your/logo.png" alt="Your Gallery Logo" className="logo"/> /> {/* An empty div to hold the logo */}
      <p className="copyright">PLACEHOLDER</p>
    </footer>
  );
}

export default Footer;