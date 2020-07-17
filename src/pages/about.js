import React, { Component } from 'react';
import Layout from '../components/layout';
import Section from '../components/Section';
import Bumper from '../components/bumper';
// import { Link } from 'gatsby';

class About extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <h1 className="mb-4">About Katrina Dawn</h1>
          <div className="lg:w-3/4">
            <p>
              My name is Katrina and I’m a watercolour sketcher residing in the Fraser Valley, British Columbia, Canada, along with my husband Michael.
              I’ve dabbled in a variety of art mediums over the decades, but have settled into this: the unpredictable and unforgiving nature of watercolour.
              It is a magical medium, and when combined with sharp pen strokes, it’s a match made in heaven.
              The portable nature of the medium also lends itself to plein-air painting,
              which is easily one of my favourite activities.
            </p>
            <p>Thanks for stopping by. I hope my art has brought a dose of inspiration to your day.</p>
          </div>
        </Section>
        <Bumper>
          <h2>Follow Katrina Dawn</h2>
          <p>
            <a href="https://www.facebook.com/KatrinaDawnStudio/" className="btn">Facebook</a>
            <a href="https://www.instagram.com/_katrinadawnstudio/" className="btn">Instagram</a>
          </p>
        </Bumper>
      </Layout>
    )
  }
}

export default About;
