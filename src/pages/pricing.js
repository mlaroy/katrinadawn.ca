import React, { Component } from 'react';
import Layout from '../components/layout';
import Section from '../components/Section';
import Bumper from '../components/bumper';
import PricingTable from '../components/pricingTable';
// import { Link } from 'gatsby';

class Pricing extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <h1 className="mb-4">Pricing</h1>
          <div className="lg:w-3/4 mb-8">
            <p>
              I offer a number of standard sizes for commissions. My style involves including a 1” border of white around
              the painting to frame it with lightness and to capture the <em>gorgeous</em> edge that comes when watercolour dries.
            </p>
            <p>
              Each size has a range of price depending on the complexity of the piece. All dimensions are in inches.
              Custom sizes can be accommodated. Prices listed are in Canadian dollars.
            </p>

          </div>
          <PricingTable />
        </Section>
        <Bumper>
          <h2>Contact Katrina Dawn for commissions</h2>
          <p>
            <a id="contact" href="mailto:hell%6F@ka%74rinad%61w%6E.c%61?subject=I%20would%20like%20to%20commission%20a%20painting" className="btn">Send her an email</a>
          </p>
        </Bumper>
      </Layout>
    )
  }
}

export default Pricing;
