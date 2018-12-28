import React, { Component } from 'react';

class Bumper extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="bg-color text-center">
        <div className="container">
          {children}
        </div>
      </section>
    );
  }
}

export default Bumper;