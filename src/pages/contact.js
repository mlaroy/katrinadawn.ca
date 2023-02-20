import React, { Component } from 'react';
import Layout from '../components/layout';
import Section from '../components/Section';
import Bumper from '../components/bumper';
import NewsletterForm from '../components/newsletter-form';
// import { Link } from 'gatsby';

class Contact extends Component {
  render() {
    return (
      <Layout>
        <Section>
          <h1 className="mb-4">Contact Katrina Dawn</h1>
          <div className="lg:w-3/4">
            <p className="mb-8">
              Hi! If you have a question or would like to commission a painting, please reach out.
            </p>
            <p>
              <a href="mailto:hell%6F@ka%74rinad%61w%6E.c%61" className="btn btn-inverse">Send me an email</a>
            </p>
          </div>
        </Section>
        <Section>
            <div className="lg:w-3/4">
              <h2 className="mb-4">Subscribe to my Newsletter</h2>
              <p className="mb-4">
                I send a quarterly newsletter which highlights recent work,
                provides early access to original art, and offers exclusive discounts on commissions.
              </p>
              <NewsletterForm />
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

export default Contact;
