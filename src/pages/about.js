import React, { Component } from 'react';
import Layout from '../components/layout';
import Section from '../components/Section';
import Bumper from '../components/bumper';
import { Link } from 'gatsby';

class About extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <h1 className="mb-4">About Katrina Dawn</h1>
          <div className="w-3/4">
            <p>
              Katrina Dawn is a watercolour sketcher residing in the Fraser Valley, BC with her husband, Michael. Although she has dabbled in many different art mediums, the unpredictable and unforgiving nature of watercolour poses a unique challenge and has captured her interests now exclusively.
              Its portable nature lends itself to plein-air painting, which is Katrina’s preferred creative environment.
            </p>
            <p>
              Although naturally drawn to urban sketching, Katrina is frequently commissioned for both home and pet portraits.
              The challenge of depicting personal material in an authentic yet artistic manner is a welcome one.
            </p>
            <p>Katrina has also worked with a number of corporate clients, increasing brand awareness through an artistic rendering of their brands.</p>
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