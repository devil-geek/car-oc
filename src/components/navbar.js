/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'gatsby';

let lastScrollY = 0;
let ticking = false;
const clientHeight = document.documentElement.clientHeight;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'navbar transparent',
      burger: 'burger',
      dark: '',
      pg: 0,
    };
  }

  Toggle = () => {
    this.setState({
      nav:
        this.state.nav === 'navbar transparent responsive'
          ? 'navbar transparent'
          : 'navbar transparent responsive',
      burger: this.state.burger === 'burger open' ? 'burger' : 'burger open',
    });
  };

  handleScroll = e => {
    lastScrollY = window.scrollY;
    const scroll = document.documentElement.scrollTop;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - clientHeight;
        const scrolled = (scroll / height) * 100;

        if (lastScrollY >= 500) {
          this.setState({
            dark: ' dark',
            pg: `${scrolled}%`,
          });
        } else {
          this.setState({
            dark: '',
            pg: `${scrolled}%`,
          });
        }

        ticking = false;
      });

      ticking = true;
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { nav, burger, dark } = this.state;
    return (
      <div className="head-fixed">
        <nav
          className={nav + dark}
          role="navigation"
          aria-label="main navigation"
          id="navbar"
        >
          <Link className="navbar-item" to="/">
            {this.props.siteTitle}
          </Link>
          <Link
            className="navbar-item"
            activeClassName="navbar-current"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="navbar-item"
            activeClassName="navbar-current"
            to="/projects"
          >
            Projects
          </Link>
          <a
            className={burger}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.Toggle}
            id="burger"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </nav>
        <div className="progress-container">
          <div
            className="progress-bar"
            id="pgBar"
            style={{ width: this.state.pg }}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
