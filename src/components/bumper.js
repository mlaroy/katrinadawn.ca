import React, { Component } from 'react';

class Bumper extends Component {
  render() {
    const { children, bg } = this.props;
    const bgClass = bg ? bg : 'bg-brown-light';
    return (
      <section className={`${bgClass} text-center`}>
        <div className="container">
          {children}
        </div>
      </section>
    );
  }
}

export default Bumper;
