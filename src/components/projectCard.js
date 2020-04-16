import React from 'react';
import Button from './button';

const ProjectCard = props => {
  const project = props.project;
  if (!project) {
    return null;
  }
  return (
    <div key={project.node.id} className="row">
      <div className="col-10-10 col-centered project-card">
        <div className="project-card">
          <section>
            <div className="frame">
              <div
                className="img"
                style={{
                  backgroundImage: 'url(' + project.node.thumbnailImage + ')',
                }}
              />
              <div className="border">
                <div className="project-card-content">
                  <h1 className="project-card-content__title">
                    {project.node.title}
                  </h1>
                  <h2>{project.node.company}</h2>
                  <div className="project-card-content__meta">
                    {project.node.tech ? (
                      <p>
                        {project.node.tech.map((tag, index) => (
                          <span className="tag" key={tag}>
                            {tag}
                            {index === project.node.tech.length - 1
                              ? ''
                              : ' | '}{' '}
                          </span>
                        ))}
                      </p>
                    ) : null}
                  </div>
                  <p className="project-card-content__excerpt">
                    {project.node.description}
                  </p>
                  <a
                    href={project.node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button buttonText="Visit the Website" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
