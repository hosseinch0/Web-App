import React, { useState } from 'react';
import './ImageAlbum.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from './../../photos/white_hoodie_mockup.jpg';
import img2 from './../../photos/soft-blurred-blue-painting-abstract-background_120819-132.jpg';
import img3 from './../../photos/portrait-young-adult-wearing-hoodie-mockup_23-2149296253.jpg';
import img4 from './../../photos/coat.jpg';

const ImageAlbum = () => {
  const images = [img1, img2, img3, img4,img1,img1,img1,img1,img1,img1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="ImageAlbum">
      <button onClick={prevImage} className="prev">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div
        className="carousel"
        style={{
          transform: `rotateY(${currentIndex * -(360/images.length)}deg)`
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="carousel-img"
            style={{ transform: `rotateY(${index * (360/(images.length))}deg) translateZ(400px)` }}
          />
        ))}
      </div>
      <button onClick={nextImage} className="next">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ImageAlbum;
