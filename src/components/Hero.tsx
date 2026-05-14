import React from 'react';
import { Link } from 'react-router-dom';
import SocialBar from './SocialBar';
import heroImage from '../assets/Sujal Photo/SujalPhoto_Working.png';

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

            <div style={{ marginTop: '2.1rem' }}>
              <SocialBar />
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/details" className="nav-btn" style={{ 
                fontSize: '0.8rem', 
                padding: '1.25rem 3.5rem', 
                border: '1px solid #d1d1d1',
                letterSpacing: '2px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                boxSizing: 'border-box'
              }}>
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
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;