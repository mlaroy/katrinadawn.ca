import React from 'react';

const Section = props => {
  const { names, children } = props;
  console.log(props);
  return (
    <section className={names}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

export default Section;
