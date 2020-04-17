import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectCard from './projectCard';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioCard {
        nodes {
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          tech
          link
          title
          id
        }
      }
    }
  `);

  return (
    <section>
      <div className="container">
        <h3 className="u-padding-s u-centered">Portfolio</h3>
        <div className="flex-container">
          {data.allPortfolioCard.nodes.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
