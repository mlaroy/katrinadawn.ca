import React, { Component } from 'react';
import logo from '../images/logo-small.png';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();;
    return (
      <footer>
        <img src={logo} alt="Katrina Dawn Studio Logo" className="logo-img" />
        <p>
          <small>© {year} KatrinaDawnStudio. All rights reserved.</small>
        </p>
      </footer>
    );
  }
}

export default Footer;