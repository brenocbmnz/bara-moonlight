import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { ArrowContext } from '../ArrowContext';
import './Header.css';

function Header() {
  const [animationData, setAnimationData] = useState(null);
  const [isStopped, setIsStopped] = useState(true);
  const { setIsArrowVisible } = useContext(ArrowContext);
  let hoverTimer = null;

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/paw.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    speed: 0.5,
  };

  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      setIsArrowVisible(false);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
  };

  return (
    <header className="header" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <nav>
        <ul className="nav-list">
          <li className="nav-item-logo">
            <Link to="/home"
              onMouseEnter={() => setIsStopped(false)}
              onMouseLeave={() => setIsStopped(true)}
            >
              {animationData && <Lottie options={defaultOptions} height={50} width={50} isStopped={isStopped} />}
            </Link>
          </li>
          <li className="nav-item"> <Link to="/about">Bio</Link></li>
          <li className="nav-item"> <Link to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;