import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { css, children } = this.props;
    return (
      <section className={css}>
        <div className="container">
          {children}
        </div>
      </section>
    );
  }
}

export default Section;