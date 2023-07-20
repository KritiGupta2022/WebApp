import React, { useState, useEffect } from 'react';
import './tsstyles.css'; // Create a separate CSS file for styling
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

const TestimonialSlider = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  const handleSlideChange = () => {
    setActiveIndex((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleSlideChange, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider-container">
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
          >
            <p style={{fontSize:"24px"}}>{testimonial.content}</p>
            <h4>{testimonial.author}</h4>
          </div>
        ))}
      </div>
      <div className="slider-navigation">
        <button onClick={prevSlide} className='leftbtn'><FaChevronLeft size={'50px'} color='grey' /></button>
        <button onClick={nextSlide} className='rightbtn'><FaChevronRight  size={'50px'} color='grey'/></button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
