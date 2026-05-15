import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
