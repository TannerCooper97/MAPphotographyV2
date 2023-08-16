// src/components/PhotographerProfile.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/home-styles/photographer-profile.scss";
import greetPhoto from "../../assets/homeGreetPicture.jpg"


const PhotographerProfile = () => {
  return (
    <div className="profile-container">
      <div className="left-content">
        <img
          src={greetPhoto}
          alt="Photographer"
          className="profile-image"
        />
      </div>
      <div className="right-content">
        <h2>Michelle Albair</h2>
        <h4>Salt Lake City-Based Photography</h4>
        <p>From what was just a fun hobby of taking photos of landscapes, flowers, and grandkids, soon fostered a newfound obsession of photographing every single priceless moment.</p>
        <Link to="/contact" className="connect-button">
          Let's Connect
        </Link>
      </div>
    </div>
  );
};

export default PhotographerProfile;
