/* eslint-disable */
import React, { Component } from 'react';
import Octicon, { Home, Book, FileMedia } from '@primer/octicons-react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'navbar',
      burger: 'burger',
    };
  }

  render() {
    const { nav, burger } = this.state;
    return (
      <div className="head-fixed">
        <nav
          className={nav}
          role="navigation"
          aria-label="main navigation"
          id="navbar"
        >
          <AniLink
            cover
            bg="#1e1e1f"
            direction="right"
            className="navbar-item tooltip"
            to="/"
            activeClassName="active"
          >
            <span className="tooltiptext">Home</span>
            <Octicon
              icon={Home}
              ariaLabel={this.props.siteTitle}
              size="medium"
            />
          </AniLink>
          <AniLink
            cover
            bg="#1e1e1f"
            direction="right"
            className="navbar-item tooltip"
            activeClassName="active"
            to="/projects"
          >
            <span className="tooltiptext">Projects</span>
            &nbsp;
            <Octicon icon={FileMedia} ariaLabel="Projects" size="medium" />
          </AniLink>

          <AniLink
            cover
            bg="#1e1e1f"
            direction="right"
            className="navbar-item tooltip"
            activeClassName="active"
            to="/blog"
          >
            <span className="tooltiptext">Blog</span>
            <Octicon icon={Book} ariaLabel="Blog" size="medium" />
          </AniLink>

        </nav>
      </div>
    );
  }
}

export default Navbar;
