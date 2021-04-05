import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo-small.png';
class Nav extends Component {
  render() {
    return (
      <div className="container flex justify-between">
        <div className="py-4">
          <Link to="/" className="block">
            <img src={logo} width="125" alt="Katrina Dawn Studio Logo" />
          </Link>
        </div>

        <nav className="py-4 pr-4">
          <Link to="/about" className="nav-link hover:underline focus:underline">About</Link>
          <Link to="/work" className="nav-link hover:underline focus:underline">Work</Link>
          <Link to="/pricing" className="nav-link hover:underline focus:underline">Pricing</Link>
          <Link to="/blog" className="nav-link hover:underline focus:underline">Blog</Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
