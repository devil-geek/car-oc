import React from 'react';
import Button from './button';

const ProjectCard = props => {
  const project = props.project;
  if (!project) {
    return null;
  }
  return (
    <div key={project.node.id} className="row">
      <div className="col-8-10 col-centered">
        <div
          className="project-card"
          style={{
            backgroundImage:
              'linear-gradient(100deg, transparent 0%, transparent 50%,rgb(51, 53, 60) 50%), url(' +
              project.node.thumbnailImage.childImageSharp.fluid.src +
              ')',
          }}
        >
          <div className="project-card-content">
            <div className="project-card-content__meta">
              {project.node.tech ? (
                <p>
                  {project.node.company}
                  <br />
                  {project.node.tech.map((tag, index) => (
                    <span className="tag" key={tag}>
                      {tag}
                      {index === project.node.tech.length - 1 ? '' : ','}{' '}
                    </span>
                  ))}
                </p>
              ) : null}
            </div>

            <h4 className="project-card-content__title">
              {project.node.title}
            </h4>
            <p className="project-card-content__excerpt">
              {project.node.description}
            </p>
            <a
              className="is-pulled-right u-mr-md u-mt-md"
              href={project.node.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button buttonText="Visit the Website" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
