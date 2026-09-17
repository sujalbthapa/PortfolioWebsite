import React from 'react';
import type { SkillCategory } from '../../types';

interface SkillsMatrixProps {
  categories: SkillCategory[];
}

const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ categories }) => {
  return (
    <div className="toolkit-editorial-matrix">
      {categories.map((cat, idx) => (
        <article key={idx} className="toolkit-row">
          <div className="toolkit-row-header">
            <span className="toolkit-index">0{idx + 1} //</span>
            <h4 className="toolkit-category">{cat.category}</h4>
          </div>
          <div className="toolkit-items">
            {cat.skills.map((skill, sIdx) => (
              <span key={sIdx} className="toolkit-tag">
                <span className="toolkit-tag-dot" aria-hidden="true">•</span>
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default SkillsMatrix;
