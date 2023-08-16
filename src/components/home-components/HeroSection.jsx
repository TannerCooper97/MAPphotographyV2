import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import videoBackground from '../../assets/videos/ring-video.mp4';
import "../../styles/home-styles/home-hero.scss";

const HeroSection = () => {
  useEffect(() => {
    const video = document.getElementById('backgroundVideo');
    video.muted = true;
  }, []);

  return (
    <div className="hero-container">
      <video id="backgroundVideo" autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </video>
      <div className="content-container">
        <h1>Capture Every Moment</h1>
        <Link to="/services">
          <button>Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
