import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './aipage.css';
import Image1 from '../../assets/1ai.jpg';
import Image2 from '../../assets/2ai.jpg';
import Image3 from '../../assets/3ai.jpg';
import Image4 from '../../assets/4ai.jpg';
import Image5 from '../../assets/5ai.jpg';

const slides = [
  { img: Image1, title: "Discover AI Innovations" },
  { img: Image2, title: "Smart Solutions" },
  { img: Image3, title: "Future of Automation" },
  { img: Image4, title: "AI Chat Technology" },
  { img: Image5, title: "Innovate with AI" },
];

function AiSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="ai-slider-container">
      {slides.map((slide, index) => (
        <div key={index} className={index === current ? "ai-slide active" : "ai-slide"}>
          {/* Heading div on top */}
          <div className="ai-slide-heading-container">
            <h2 className="ai-slide-heading">{slide.title}</h2>
          </div>

          {/* Image */}
          <img src={slide.img} alt={slide.title} className="ai-slide-img" />

          {/* Button overlay */}
          <Link to="/Aichat" className="ai-slide-button">
            View AI Chat
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AiSlider;
