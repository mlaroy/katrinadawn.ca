import React, { Component } from 'react';

class Bumper extends Component {
  render() {
    const { children } = this.props;
    // const bgClass = bg ? bg : 'bg-brown-light';
    return (
      <section className={`text-center`} style={{ background: '#ddd'}}>
        <div className="container">
          {children}
        </div>
      </section>
    );
  }
}

export default Bumper;
