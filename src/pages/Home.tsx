import React from 'react';
import Hero from '../components/sections/Hero';
import Footer from '../components/layout/Footer';
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

      <Footer />
    </div>
  );
};

export default Home;
