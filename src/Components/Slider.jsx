import React, { useState } from 'react';
import './Slider.css';

import a from '../Assets/gal1.jpg';
import b from '../Assets/gal2.jpg';
import c from '../Assets/pexels-frendsmans-1926769.jpg';
import d from '../Assets/pexels-harsh-kushwaha-804217-1721558.jpg';
import e from '../Assets/gal3.jpg';

import { MdDoubleArrow } from "react-icons/md";

function Slider() {
  const images = [a, b, c, d, e];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-box">
        <img src={images[index]} alt={`Slide ${index + 1}`} className="slider-image" />
        <div className="arrow right" onClick={handleNext}>
          <MdDoubleArrow />
        </div>
        <div className="arrow left" onClick={handlePrev}>
          <MdDoubleArrow />
        </div>
      </div>
    </div>
  );
}

export default Slider;
