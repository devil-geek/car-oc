import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';

const PostCard = props => {
  const post = props.post;
  if (!post) {
    return null;
  }
  return (
    <div className="post-card">
      <div className="post-card-img">
        <Link to={post.node.fields.slug} className="link">
          <Img fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid} />
        </Link>
      </div>

      <div className="post-card-content">
        <div className="post-card-content__meta">
          {post.node.frontmatter.tags ? (
            <p>
              {post.node.frontmatter.tags.map(tag => (
                <Link
                  to={`/tags/${kebabCase(tag)}/`}
                  key={tag + `tag`}
                  className="link"
                >
                  #{tag}&nbsp;
                </Link>
              ))}
            </p>
          ) : null}

          <p>
            <time dateTime={post.node.frontmatter.date}>
              {post.node.frontmatter.date}
            </time>
          </p>
        </div>

        <h4 className="post-card-content__title">
          <Link to={post.node.fields.slug} className="link">
            {post.node.frontmatter.title}
          </Link>
        </h4>
        <p className="post-card-content__excerpt">{post.node.excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;
