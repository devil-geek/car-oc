import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostCard from '../components/postCard';
import Pagination from '../components/pagination';
import Header from '../components/header';

const BlogPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  const rows = Math.ceil(posts.length / 3);

  let content = [];
  for (let i = 0; i < rows; i++) {
    const cols = posts.slice(i, i + 3);
    content.push(
      <div className="row" key={i}>
        {cols.map(post => (
          <div key={post.node.id} className="col-1-3">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header title={"Blog"} text={"Ideas and experiments"}/>

      <div className="post-list">
        <div>{content}</div>
      </div>
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export default BlogPage;

// Get all markdown files, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
