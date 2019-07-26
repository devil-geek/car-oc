import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Header = ({ data, title, text }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "abstractsdark.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <header
          className="home"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 95%), url(' +
              data.placeholderImage.childImageSharp.fluid.src +
              ')',
          }}
        >
          <div className="home-box">
            <h1 className="home-box-title">{title}</h1>
            <h2 className="home-box-text">
              <div className="row">
                <div className="col-2-3 col-centered">
                  <p>{text}</p>
                </div>
              </div>
            </h2>
          </div>
        </header>
      )}
    />
  );
};

Header.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Header.defaultProps = {
  title: `Hey i'm Carlos Ocejo`,
  text: `I have developed websites, mobile applications, iot systems and
              videogames, my strength is in the front end focused on
              optimization and attention to detail. I'm self-taught, I learn
              fast and i'm always improving my self.`,
};

export default Header;