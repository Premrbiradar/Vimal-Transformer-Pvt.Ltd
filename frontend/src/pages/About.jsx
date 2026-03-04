import React from "react";
import "../styles/About.css";
import aboutImage from "../assets/transformers.jpg";

function About() {
  return (
    <div className="about-page">

      <div className="about-hero">
        <div className="about-hero-title">
          About Vimal Transformer
        </div>
        <div className="about-hero-subtitle">
          Powering Industries with Reliable Transformer Solutions
        </div>
      </div>

      <div className="about-main-section">

        <div className="about-image-wrapper">
          <img 
            src={aboutImage} 
            alt="Transformer"
            className="about-image"
          />
        </div>

        <div className="about-text-section">
          <div className="about-heading">
            Who We Are
          </div>

          <div className="about-paragraph">
            Vimal Transformer is a leading manufacturer of high-quality
            electrical transformers designed for industrial and commercial use.
          </div>

          <div className="about-paragraph">
            We focus on innovation, safety, and reliability to deliver
            long-lasting and energy-efficient power distribution solutions.
          </div>

          <button className="about-button">
            Explore More
          </button>
        </div>

      </div>

      <div className="about-stats-section">

        <div className="about-stat-card">
          <div className="about-stat-number">15+</div>
          <div className="about-stat-text">Years Experience</div>
        </div>

        <div className="about-stat-card">
          <div className="about-stat-number">500+</div>
          <div className="about-stat-text">Projects Completed</div>
        </div>

        <div className="about-stat-card">
          <div className="about-stat-number">300+</div>
          <div className="about-stat-text">Happy Clients</div>
        </div>

        <div className="about-stat-card">
          <div className="about-stat-number">24/7</div>
          <div className="about-stat-text">Customer Support</div>
        </div>

      </div>

    </div>
  );
}

export default About;