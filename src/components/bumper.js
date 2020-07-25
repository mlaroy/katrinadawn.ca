import React, { Component } from 'react';

class Bumper extends Component {
  render() {
    const { children, bgClass } = this.props;
    const bg = bgClass ? 'bg-brown-light' : bgClass;
    return (
      <section className={`${bg} text-center`}>
        <div className="container">
          {children}
        </div>
      </section>
    );
  }
}

export default Bumper;
