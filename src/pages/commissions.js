import React, { Component } from 'react';
import Layout from '../components/layout';
import Section from '../components/Section';
import InstagramHome from '../components/instagramHome'
import InstagramPets from '../components/instagramPets'
import Bumper from '../components/bumper'

class Commissions extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <h1 className="mb-4">Commissions</h1>
          <div className="lg:w-3/4">
            <p>
              While Katrina enjoys painting subject matter of her own choosing, she is often contacted for commissions.
              Commissions are subject matter of the customer’s choosing, but over the years two prominent themes have emerged: Pet Portraits and Home Portraits. Below is a select sampling of watercolour sketches that Katrina has done over the years for clients on each theme. </p>
            <p>Please <a href="#contact" className="link hover:underline focus:underline">contact</a> her if you are interested in a commission.</p>
          </div>
        </Section>
        <InstagramHome tag="homeportrait"/>
        <InstagramPets tag="petportrait"/>
        <Bumper>
          <h2>Contact Katrina Dawn for commissions</h2>
          <p>
            <a id="contact" href="mailto:hell%6F@ka%74rinad%61w%6E.c%61?subject=I%20would%20like%20to%20commission%20a%20painting" className="btn">Send her an email</a>
          </p>
        </Bumper>
      </Layout>
    );
  }
}

export default Commissions;
