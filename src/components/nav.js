import React, { Component } from 'react';
import { Link } from 'gatsby';

class Nav extends Component {
  render() {
    return (
      <div className="container flex justify-end">
        <nav className="py-4">
          <Link to="/" className="nav-link hover:underline focus:underline">Home</Link>
          <Link to="/about" className="nav-link hover:underline focus:underline">About</Link>
          <Link to="/commissions" className="nav-link hover:underline focus:underline">Commissions</Link>
        </nav>
      </div>
    );
  }
}

export default Nav;