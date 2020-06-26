import React from 'react';
import Img from 'gatsby-image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = props => {
  const project = props.project;
  if (!project || !project.image.childImageSharp) {
    return null;
  }
  return (
    <div key={project.id}>
      <div className="post-card">
        <div className="post-card-img">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label={project.title}
          >
            <Img fluid={project.image.childImageSharp.fluid} />
          </a>
        </div>

        <div className="post-card-content">
          <div className="post-card-content__meta">
            {project.tech ? (
              <p className="flex-container">
                {project.tech.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </p>
            ) : null}
          </div>
          <h4 className="post-card-content__title">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label={project.title}
            >
              {project.title}
            </a>
          </h4>
          <p className="post-card-content__excerpt">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn social-btn-site"
            aria-label={project.title}
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
