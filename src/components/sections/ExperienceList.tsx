import React from 'react';
import type { ExperienceItem } from '../../types';

interface ExperienceListProps {
  items: ExperienceItem[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ items }) => {
  return (
    <ul className="editorial-list">
      {items.map((exp, i) => (
        <li key={i} className="editorial-list-item">
          <div className="item-meta">{exp.date}</div>
          <div>
            <h4 className="item-title">{exp.role}</h4>
            <div className="item-subtitle">{exp.company}</div>
            <ul className="bullet-list">
              {exp.desc.map((d, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: d }} />
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
