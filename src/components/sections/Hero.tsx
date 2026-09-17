import React from 'react';
import { Link } from 'react-router-dom';
import SocialBar from '../ui/SocialBar';
import heroImage from '../../assets/Sujal Photo/SujalPhoto_Working.webp';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-split">
        <div className="hero-text-side">
          <div className="hero-text-content">
            <h2 className="editorial-subtitle">Software Engineer & Creative Strategist</h2>
            <h1 className="editorial-title">Sujal Bikram<br /><em>Thapa</em><span className="dot">.</span></h1>
            
            <p className="lead-text hero-lead">
              Building high-concurrency distributed systems, privacy-preserving machine learning pipelines, and full-stack web platforms—grounded in multilateral diplomacy, community leadership, and design craftsmanship.
            </p>

            <div className="hero-cta-wrapper" style={{ marginTop: '1.5rem', marginBottom: '1.25rem' }}>
              <Link to="/details" className="btn-primary hero-cta-btn">
                Explore Full Portfolio <em>&rarr;</em>
              </Link>
            </div>

            <div className="hero-social-wrapper">
              <SocialBar />
            </div>
          </div>
        </div>

        <div className="hero-image-side">
          <div className="hero-image-container-wrapper">
            <div className="hero-image-container">
              <img 
                src={heroImage} 
                alt="Sujal Bikram Thapa" 
                className="hero-main-image"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
