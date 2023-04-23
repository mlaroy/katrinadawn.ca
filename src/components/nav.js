import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo-small.png';
class Nav extends Component {
  render() {
    return (
      <div className="container flex justify-between">
        <div className="py-4 flex-shrink-0">
          <Link to="/" className="block w-96">
            <img src={logo} width="125" alt="Katrina Dawn Studio Logo" />
          </Link>
        </div>

        <nav className="py-4 pr-4 nav-links flex flex-wrap lg:flex-nowrap justify-end items-center gap-2">
          <Link to="/about" className="nav-link hover:underline focus:underline">About</Link>
          <Link to="/work" className="nav-link hover:underline focus:underline">Work</Link>
          <Link to="/pricing" className="nav-link hover:underline focus:underline">Pricing</Link>
          <Link to="/blog" className="nav-link hover:underline focus:underline">Blog</Link>
          <Link to="/contact" className="nav-link hover:underline focus:underline">Contact</Link>
          <a href="https://www.etsy.com/shop/KatrinaDawnStudio" className="btn btn-inverse">Shop</a>
        </nav>
      </div>
    );
  }
}

export default Nav;
