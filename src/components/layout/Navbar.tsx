import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import type { SectionId } from '../../types';

interface NavbarProps {
  activeSection: string;
  onScroll: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onScroll }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Close menu when clicking a link
  const handleLinkClick = (id: SectionId) => {
    onScroll(id);
    setIsMenuOpen(false);
  };

  const handleBrandClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="nav-brand" onClick={handleBrandClick}>
          Sujal <span style={{ opacity: 0.5 }}>Thapa.</span>
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links desktop-only">
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

        {/* Burger Button */}
        <button 
          className="burger-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div className={`nav-sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />
      
      {/* Mobile Sidebar */}
      <aside className={`nav-sidebar ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="nav-brand" onClick={handleBrandClick}>
            Sujal <span style={{ opacity: 0.5 }}>Thapa.</span>
          </div>
        </div>
        <div className="sidebar-links">
          {links.map((link) => (
            <button
              key={link.id}
              className={`sidebar-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.id)}
            >
              <span className="link-number">{links.indexOf(link) + 1}</span>
              <span className="link-label">{link.label}</span>
            </button>
          ))}
        </div>
        <div className="sidebar-footer">
          <p>© {new Date().getFullYear()} Sujal Bikram Thapa</p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
