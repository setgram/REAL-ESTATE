import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

export default function About() {
  return (
    <div className="about-page-container">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
        className="about-hero-image"
        alt="There is an image just in case it is broken I will fix it"
      />
      <div className="about-page-content">
        <h1>All you need to know about us.</h1>
        <p>
          Our mission is to provide exceptional real estate services to clients
          while upholding high standards of professionalism and ethics.
        </p>
        <p>
          Our team is full of exceptional Real estate agents who know firsthand
          the magic of delivering your dream home 😊.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your dream home is waiting.
          <br />
          Our services are available, please go through them.
        </h2>
        <Link className="link-button" to="/properties">
          Explore our Homes
        </Link>
      </div>
    </div>
  );
}
