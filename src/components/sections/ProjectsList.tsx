import React from 'react';
import type { ProjectItem } from '../../types';

interface ProjectsListProps {
  projects: ProjectItem[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <article key={project.id} className="article-card project-card">
          <div className="project-header">
            <div className="item-meta">{project.date}</div>
            {project.award && (
              <span className="project-award-badge">{project.award}</span>
            )}
          </div>
          
          <div className="article-category">{project.category}</div>
          <h4 className="article-title project-title">{project.title}</h4>
          
          <p className="lead-text project-lead">
            {project.shortDesc}
          </p>

          <p className="body-text" style={{ marginTop: '0.5rem' }}>
            {project.desc}
          </p>

          {project.collaborators && project.collaborators.length > 0 && (
            <div className="project-collaborators">
              <span className="collaborators-label">Collaborators:</span>{' '}
              <span className="collaborators-names">{project.collaborators.join(', ')}</span>
            </div>
          )}

          <div className="project-tech-stack">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="tech-badge">{tech}</span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="project-links">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default ProjectsList;
