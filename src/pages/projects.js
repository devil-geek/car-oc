import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import ProjectCard from '../components/projectCard';

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <Header title={'Projects'} text={'Some of my work'} />

    <div className="project-list">
      {data.allProjectsJson.edges.map(project => (
        <ProjectCard key={project.node.id} project={project} />
      ))}
    </div>
  </Layout>
);

export default ProjectsPage;

export const projectsQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          title
          description
          url
          tech
          company
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
