import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Footer from '../components/layout/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import photoLandscape from '../assets/Sujal Photo/View_Landscape.jpg';

const Home: React.FC = () => {
  useScrollReveal();

  return (
    <div className="portfolio">
      <header className="navbar home-header" style={{ position: 'absolute', background: 'transparent', border: 'none', width: '100%' }}>
        <div className="nav-brand">
          Sujal <span style={{ opacity: 0.5 }}>Thapa.</span>
        </div>
        <div className="nav-actions">
          <Link 
            to="/details" 
            className="nav-btn"
            style={{ 
              textTransform: 'uppercase', 
              fontSize: '0.75rem', 
              letterSpacing: '0.15em', 
              fontWeight: 600,
              padding: '0.5rem 0'
            }}
          >
            Explore Portfolio &rarr;
          </Link>
        </div>
      </header>

      <main className="content">
        <Hero />
      </main>
      
      <div style={{ width: '100%', borderTop: '1px solid #d1d1d1', borderBottom: '1px solid #d1d1d1', overflow: 'hidden' }}>
        <img 
          src={photoLandscape} 
          alt="Kathmandu Valley" 
          className="home-landscape-image"
          style={{ 
            width: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center 40%',
            display: 'block'
          }} 
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
