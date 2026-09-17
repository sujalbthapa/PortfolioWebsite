import React from 'react';

interface SectionProps {
  id: string;
  number: string;
  title: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  layoutClassName?: string;
  sideContent?: React.ReactNode;
  reversed?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  number, 
  title, 
  children, 
  className = "", 
  layoutClassName = "editorial-grid",
  sideContent,
  reversed = false
}) => {
  const combinedLayoutClass = `${layoutClassName} ${reversed ? 'grid-reversed' : ''}`.trim();

  return (
    <section id={id} className={`section reveal ${className}`}>
      <div className={combinedLayoutClass}>
        <div className="section-header">
          <div className="section-number">{number}</div>
          <h3 className="section-title">{title}</h3>
          {sideContent && <div style={{ marginTop: '1.25rem', width: '100%' }}>{sideContent}</div>}
        </div>
        <div className="section-body">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;