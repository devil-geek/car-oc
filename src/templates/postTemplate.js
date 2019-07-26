import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`, ...frontmatter.tags]}
      />
      <header
        className="home"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(1, 0, 5, 0.8) 0%, rgba(85, 51, 85, 0.5) 95%), url(' + frontmatter.thumbnail.childImageSharp.fluid.src + ')',
        }}
      >
        <div className="home-box">
          <h1 className="home-box-title">{frontmatter.title}</h1>
          <h2 className="home-box-text">
            <div className="row">
              <div className="col-2-3 col-centered">
                <p>{frontmatter.date}</p>
              </div>
            </div>
          </h2>
        </div>
      </header>
      <section>
        <div>
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMM, YYYY")
        title
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
