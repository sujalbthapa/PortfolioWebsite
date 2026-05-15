import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  brief: string;
  aspectRatio?: string;
  height?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  label, 
  brief, 
  aspectRatio = '3/4', 
  height,
  className = '' 
}) => {
  return (
    <div 
      className={`image-placeholder-container ${className}`} 
      style={{ 
        width: '100%', 
        aspectRatio: height ? undefined : aspectRatio,
        height: height || 'auto',
        backgroundColor: '#f3f3f3',
        border: '1px solid #d1d1d1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        textAlign: 'center',
        position: 'relative',
        boxSizing: 'border-box'
      }}
    >
      <ImageIcon size={20} strokeWidth={1} style={{ marginBottom: '0.75rem', color: '#777' }} />
      <p style={{ 
        fontFamily: 'var(--font-sans)', 
        fontSize: '0.65rem', 
        letterSpacing: '2px', 
        textTransform: 'uppercase',
        fontWeight: 500,
        color: '#111',
        margin: 0
      }}>
        {label}
      </p>
      <p style={{ 
        fontFamily: 'var(--font-serif)', 
        fontSize: '0.8rem', 
        fontStyle: 'italic',
        color: '#777',
        marginTop: '0.5rem',
        maxWidth: '180px',
        lineHeight: '1.2'
      }}>
        {brief}
      </p>
    </div>
  );
};

export default ImagePlaceholder;
