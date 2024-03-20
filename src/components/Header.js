import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <header className="header">
      {/* <div className="logo">
        <Link to="/">Your Gallery Name</Link> 
      </div> */}
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}> {/* Inline styles */}
          <li style={{ marginRight: '20px' }}> <Link to="/home">Home</Link></li>
          <li style={{ marginRight: '20px' }}> <Link to="/stories">Stories</Link></li>
          <li style={{ marginRight: '20px' }}> <Link to="/about">Bio</Link></li>
          <li style={{ marginRight: '20px' }}> <Link to="/gallery">Gallery</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;