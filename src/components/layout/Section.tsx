import React from 'react';

interface SectionProps {
  id: string;
  number: string;
  title: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  layoutClassName?: string;
  sideContent?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  number, 
  title, 
  children, 
  className = "", 
  layoutClassName = "editorial-grid",
  sideContent
}) => {
  return (
    <section id={id} className={`section reveal ${className}`}>
      <div className={layoutClassName}>
        <div className="section-header">
          <div className="section-number">{number}</div>
          <h3 className="section-title">{title}</h3>
          {sideContent && <div style={{ marginTop: '2rem', width: 'fit-content' }}>{sideContent}</div>}
        </div>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;