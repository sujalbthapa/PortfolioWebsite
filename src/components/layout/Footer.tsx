import React from 'react';
import SocialBar from '../ui/SocialBar';

/**
 * Footer component that provides brand information and social links.
 * Used across main pages for a consistent closing experience.
 */
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h2 className="footer-brand">Sujal Bikram Thapa</h2>
      <p className="footer-meta">
        Software Engineer & Creative Strategist • Kathmandu, Nepal • {new Date().getFullYear()}
      </p>
      <div style={{ marginTop: '2rem' }}>
        <SocialBar size={14} />
      </div>
    </footer>
  );
};

export default Footer;
