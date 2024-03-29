import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Instagram from '../components/instagram'
import Testimonials from '../components/testimonials'
import Bumper from '../components/bumper'
import PurposeStatement from '../components/PurposeStatement'
import ContentfulFeaturedPost from '../components/contentfulFeaturedPost'
import ContentfulBlogTeaser from '../components/contentfulBlogTeaser'


const IndexPage = () => (
  <Layout>
    <Hero />
    <PurposeStatement />
    <Bumper>
      <h2>Follow Katrina Dawn</h2>
      <p>
        <a href="https://www.facebook.com/KatrinaDawnStudio/" className="btn">Facebook</a>
        <a href="https://www.instagram.com/_katrinadawnstudio/" className="btn">Instagram</a>
      </p>
    </Bumper>
    <ContentfulFeaturedPost />
    <ContentfulBlogTeaser />
    <Instagram />
    <Testimonials />
    <Bumper>
      <h2>Contact Katrina Dawn for commissions</h2>
      <p>
        <a href="mailto:hell%6F@ka%74rinad%61w%6E.c%61" className="btn">Send me an email</a>
      </p>
    </Bumper>
  </Layout>
)

export default IndexPage
