import React, { Component } from 'react';
import logo from '../images/logo-small.png';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();;
    return (
      <footer>
        <img src={logo} alt="Katrina Dawn Studio Logo" className="logo-img" />
        <p className="mb-0">
          <small>© {year} KatrinaDawnStudio. All rights reserved.</small>
        </p>
        <p className="text-xs">Website by <a className="link" href="https://cascadia.digital">Cascadia Digital</a></p>
      </footer>
    );
  }
}

export default Footer;
