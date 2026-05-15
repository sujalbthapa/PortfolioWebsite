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
            <h2 className="editorial-subtitle">Hello, I'm</h2>
            <h1 className="editorial-title">Sujal Bikram<br /><em>Thapa</em><span className="dot">.</span></h1>
            
            <p className="lead-text" style={{ fontStyle: 'italic', marginBottom: '1.25rem' }}>
              I build software, study geopolitics, and lead service projects—all with a nerdy geek's curiosity.
            </p>

            <div className="hero-social-container">
              <SocialBar />
            </div>

            <div className="hero-cta-container">
              <Link to="/details" className="btn-primary hero-btn">
                Explore Full Portfolio <em>&rarr;</em>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-image-side">
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
    </section>
  );
};

export default Hero;