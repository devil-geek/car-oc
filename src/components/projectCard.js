import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';

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
                  {project.node.tech.map((tag, index) => (
                    <span>{tag}{index === project.node.tech.length - 1 ? "" : ","} </span>
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
            <a href={project.node.url}>
              <button buttonText="Visit the Website">ver</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
