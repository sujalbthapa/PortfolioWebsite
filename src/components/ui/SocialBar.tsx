import React from 'react';
import { Mail, BookOpen } from 'lucide-react';

interface SocialBarProps {
  size?: number;
  className?: string;
}

const SocialBar: React.FC<SocialBarProps> = ({ size = 16, className = "social-bar" }) => {
  const iconStyle = { fontSize: `${size}px` };

  const socialLinks = [
    { href: "mailto:sujalbikramthapa@gmail.com", title: "Email", icon: <Mail size={size} strokeWidth={1.5} /> },
    { href: "https://github.com/sujalbthapa", title: "GitHub", icon: <i className='bx bxl-github' style={iconStyle}></i> },
    { href: "https://linkedin.com/in/sujalbthapa", title: "LinkedIn", icon: <i className='bx bxl-linkedin' style={iconStyle}></i> },
    { href: "https://www.instagram.com/sujalbthapa/", title: "Instagram", icon: <i className='bx bxl-instagram' style={iconStyle}></i> },
    { href: "https://www.facebook.com/sujalbikramthapa", title: "Facebook", icon: <i className='bx bxl-facebook' style={iconStyle}></i> },
    { href: "https://kawfibeans.blogspot.com", title: "Blogger", icon: <BookOpen size={size} strokeWidth={1.5} /> },
  ];

  return (
    <div className={className}>
      {socialLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.href} 
          target={link.href.startsWith('mailto') ? undefined : "_blank"} 
          rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"} 
          className="icon-link" 
          title={link.title}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
