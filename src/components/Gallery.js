import React, { useState, useRef } from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    { src: 'https://i.imgur.com/7igDcs5.png', alt: 'Crystal Kiss' },
    { src: 'https://i.imgur.com/icHKcLL.png', alt: 'Smile' },
    { src: 'https://i.imgur.com/ZrDzB79.jpg', alt: 'Snoot Boop' },
    // ... add more images
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    const fullImageDiv = document.querySelector('.full-image'); 
    fullImageDiv.classList.add('show'); 
  };

  const closeFullImage = () => {
    const fullImageDiv = document.querySelector('.full-image');
    fullImageDiv.classList.remove('show'); 
  };

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid"> 
        {images.map((image, index) => ( 
          <div className="gallery-item" key={index} onClick={() => handleImageClick(index)}> 
            <img src={image.src} alt={image.alt} /> 
            <div className="gallery-overlay"></div>
          </div>
        ))}
      </div>

      <div className="full-image">
        <img src={images[selectedImageIndex]?.src} alt={images[selectedImageIndex]?.alt} /> 
        <span className="close-button" onClick={closeFullImage}>&times;</span>
      </div> 
    </section>
  );
}

export default Gallery;