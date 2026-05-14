import React from 'react';
import Hero from '../components/Hero';
import SocialBar from '../components/SocialBar';
import { useScrollReveal } from '../hooks/useScrollReveal';
import photoLandscape from '../assets/Sujal Photo/View_Landscape.jpg';

const Home: React.FC = () => {
  useScrollReveal();

  return (
    <div className="portfolio reveal">
      <header className="navbar" style={{ position: 'absolute', background: 'transparent', border: 'none', width: '100%', padding: '2rem clamp(1.5rem, 5vw, 3rem)' }}>
        <div className="nav-brand">
          Sujal <span style={{ opacity: 0.5 }}>Thapa.</span>
        </div>
      </header>

      <main className="content">
        <Hero />
      </main>
      
      <div style={{ width: '100%', borderTop: '1px solid #d1d1d1', borderBottom: '1px solid #d1d1d1', overflow: 'hidden' }}>
        <img 
          src={photoLandscape} 
          alt="Kathmandu Valley" 
          style={{ 
            width: '100%', 
            height: '500px', 
            objectFit: 'cover', 
            objectPosition: 'center 40%',
            display: 'block'
          }} 
        />
      </div>

      <footer className="footer">
        <h2 className="footer-brand">Sujal Bikram Thapa</h2>
        <p className="footer-meta">Software Engineer & Creative Strategist • Kathmandu, Nepal • {new Date().getFullYear()}</p>
        <div style={{ marginTop: '2rem' }}>
          <SocialBar size={14} />
        </div>
      </footer>
    </div>
  );
};

export default Home;
