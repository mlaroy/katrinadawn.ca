import React, { Component } from 'react';
import Layout from '../components/layout';
import Section from '../components/Section';
import InstagramHome from '../components/instagramHome'
import InstagramPets from '../components/instagramPets'
import InstagramCorporate from '../components/instagramCorporate'
import Bumper from '../components/bumper'

class Commissions extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <h1 className="mb-4">Commissions</h1>
          <div className="lg:w-3/4">
            <p>
              It is an honour to capture a personal story in a painting.
            </p>
            <p>
              The best response I get upon delivering a commission is tears. Tears signify that I struck a chord; that I captured an <em>essence</em> known to the recipient. That I did my job as an artist and was attentive to detail, persistent in mixing the precise shade of colour needed, and able through my brush and pen strokes to transform a memory into a piece of art.
            </p>
            <p>
              Two themes of commissions have emerged over the years: Home Portraits and Pet Portraits.
            </p>
          </div>
        </Section>
        <InstagramHome/>
        <InstagramPets/>
        <InstagramCorporate />
        <Bumper bg="bg-white">
          <h2>Contact Katrina Dawn for commissions</h2>
          <p>
            <a id="contact" href="mailto:hell%6F@ka%74rinad%61w%6E.c%61?subject=I%20would%20like%20to%20commission%20a%20painting" className="btn">Send me an email</a>
          </p>
        </Bumper>
      </Layout>
    );
  }
}

export default Commissions;
