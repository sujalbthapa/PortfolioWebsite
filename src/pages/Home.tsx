import React from 'react';
import Hero from '../components/Hero';
import SocialBar from '../components/SocialBar';
import photoLandscape from '../assets/Sujal Photo/View_Landscape.jpg';

const Home: React.FC = () => {
  return (
    <div className="portfolio">
      <header className="navbar" style={{ position: 'absolute', background: 'transparent', border: 'none' }}>
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
            display: 'block',
            transition: 'transform 0.8s ease, filter 0.5s ease'
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
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
