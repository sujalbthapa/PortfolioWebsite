import React from 'react';
import type { SkillCategory } from '../../types';

interface SkillsMatrixProps {
  categories: SkillCategory[];
}

const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ categories }) => {
  const midpoint = Math.ceil(categories.length / 2);
  const col1 = categories.slice(0, midpoint);
  const col2 = categories.slice(midpoint);

  const renderCard = (cat: SkillCategory, idx: number) => (
    <article key={idx} className="article-card">
      <div className="article-category">{cat.category}</div>
      <h4 className="article-title" style={{ fontSize: '1.25rem', marginBottom: '0.4rem', lineHeight: '1.3' }}>
        {cat.title || cat.category}
      </h4>
      {cat.desc && (
        <p className="body-text" style={{ color: 'var(--text-charcoal)', fontSize: '0.92rem', lineHeight: '1.55', marginBottom: '0.65rem' }}>
          {cat.desc}
        </p>
      )}
      <div className="toolkit-items">
        {cat.skills.map((skill, sIdx) => (
          <span key={sIdx} className="toolkit-tag">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );

  return (
    <div className="editorial-grid-2">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {col1.map((cat, idx) => renderCard(cat, idx))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {col2.map((cat, idx) => renderCard(cat, midpoint + idx))}
      </div>
    </div>
  );
};

export default SkillsMatrix;
