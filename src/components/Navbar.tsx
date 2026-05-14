import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { SectionId } from '../types';

interface NavbarProps {
  activeSection: string;
  onScroll: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onScroll }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const links: { id: SectionId; label: string }[] = [
    { id: 'profile', label: 'Profile' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'research', label: 'Research' },
    { id: 'mun', label: 'MUN' },
    { id: 'rotaract', label: 'Rotaract' },
    { id: 'civic', label: 'Civic' },
    { id: 'academic', label: 'Academic' },
  ];

  const handleBrandClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="nav-brand" onClick={handleBrandClick} style={{ cursor: 'pointer' }}>
        Sujal <span style={{ opacity: 0.5 }}>Thapa.</span>
      </div>
      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.id}
            className={`nav-btn ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => onScroll(link.id)}
            aria-current={activeSection === link.id ? 'page' : undefined}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
