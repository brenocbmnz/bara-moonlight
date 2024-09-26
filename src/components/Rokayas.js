import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rokayas.css';

function Rokayas() {
  const images = [
    { src: 'https://i.imgur.com/grpnt6E.jpeg', alt: 'Crystal Kiss' },
    { src: 'https://i.imgur.com/grpnt6E.jpeg', alt: 'Crystal Kiss' },
    { src: 'https://i.imgur.com/grpnt6E.jpeg', alt: 'Crystal Kiss' },
    { src: 'https://i.imgur.com/grpnt6E.jpeg', alt: 'Crystal Kiss' },
    { src: 'https://i.imgur.com/grpnt6E.jpeg', alt: 'Crystal Kiss' },
    // ... add more images
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const fullImageDiv = useRef(null);
  const navigate = useNavigate();

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    fullImageDiv.current.classList.add('show');
  };

  const closeFullImage = () => {
    fullImageDiv.current.classList.remove('show');
  };

  const handleImageClickPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <section className="gallery">
      <h2>ROKAYAS</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} onClick={() => handleImageClick(index)}>
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay"></div>
          </div>
        ))}
      </div>

      <div className="full-image" ref={fullImageDiv} onClick={closeFullImage}>
        <img src={images[selectedImageIndex]?.src} alt={images[selectedImageIndex]?.alt} onClick={handleImageClickPropagation} />
        <span className="close-button" onClick={closeFullImage}>&times;</span>
      </div>

      <div className="button-container">
        <button onClick={() => navigate('/the-aegenwulfs')}>The Aegenwulfs</button>
        <button onClick={() => navigate('/belmorn')}>Belmorn</button>
        <button onClick={() => navigate('/rokayas')}>Rokayas</button>
      </div>
    </section>
  );
}

export default Rokayas;