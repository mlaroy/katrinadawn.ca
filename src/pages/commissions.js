import React, { Component } from 'react';
import Layout from '../components/layout';
import Section from '../components/Section';
import InstagramHome from '../components/instagramHome'
import InstagramPets from '../components/instagramPets'

class Commissions extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <h1 className="mb-4">Commissions</h1>
          <div className="w-3/4">
            <p>Katrina Dawn is a watercolour sketcher residing in the Fraser Valley, BC with her husband, Michael. Although she has dabbled in many different art mediums, the unpredictable and unforgiving nature of watercolour poses a unique challenge and has captured her interests now exclusively. Its portable nature lends itself to plein-air painting, which is Katrina’s preferred creative environment.</p>
            <p>Although naturally drawn to urban sketching, Katrina is frequently commissioned for both home and pet portraits. The challenge of depicting personal material in an authentic yet artistic manner is a welcome one.</p>
            <p>Katrina has also worked with a number of corporate clients, helping to raise brand awareness with their stakeholders through her commissions.</p>
          </div>
        </Section>
        <InstagramHome tag="homeportrait"/>
        <InstagramPets tag="petportrait"/>
      </Layout>
    );
  }
}

export default Commissions;