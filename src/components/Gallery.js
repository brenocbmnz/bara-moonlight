import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

function Gallery() {
  const navigate = useNavigate();

  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item" onClick={() => handleImageClick('/the-aegenwulfs')}>
          <img src="https://i.imgur.com/7igDcs5.png" alt="The Aegenwulfs" />
          <div className="gallery-overlay">
            <p>The Aegenwulfs</p>
          </div>
        </div>
        <div className="gallery-item" onClick={() => handleImageClick('/belmorn')}>
          <img src="https://i.imgur.com/9TON4q0.jpeg" alt="Belmorn" />
          <div className="gallery-overlay">
            <p>Belmorn</p>
          </div>
        </div>
        <div className="gallery-item" onClick={() => handleImageClick('/rokayas')}>
          <img src="https://i.imgur.com/grpnt6E.jpeg" alt="Rokayas" />
          <div className="gallery-overlay">
            <p>Rokayas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;