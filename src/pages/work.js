import React, { Component } from 'react';
import Layout from '../components/layout';
import Section from '../components/Section';
import ContentfulHome from '../components/contentfulHome'
// import InstagramPets from '../components/instagramPets'
import ContentfulPets from '../components/contentfulPets'
import InstagramCorporate from '../components/instagramCorporate'
import Bumper from '../components/bumper'

class Commissions extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <h1 className="mb-4">Work</h1>
          <div className="lg:w-3/4">
            <p>It is an honour to capture a personal story through a commissioned painting.</p>
            <p>Two prominent themes of commissions have emerged over the years: Home Portraits and Pet Portraits.</p>
          </div>
        </Section>
        <ContentfulHome />
        <ContentfulPets />
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
