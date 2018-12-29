import React, { Component } from 'react';
import logo from '../images/logo.png';
import parliament from '../images/parliament.jpg';

class Hero extends Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  state = {
    transform: ''
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({
      transform: `translate3d(0, ${scrolled * 0.3}px, 0)`
    })
  }

  render() {
    const { transform } = this.state;
    return (
      <header>
        <div className="header-content" style={{ transform }}>
          <h1>
            <span className="screen-reader">Katrina Dawn Studio</span>
            <img src={logo} alt="Katrina Dawn Studio Logo" className="logo-img" />
            <small>watercolour sketcher</small>
          </h1>
          <p>Fraser Valley, BC</p>
        </div>
        <img src={parliament} alt="Katrina Dawn Studio Logo" className="ship-img" />
      </header>
    );
  }
}

export default Hero;