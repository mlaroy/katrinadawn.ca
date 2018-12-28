import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Instagram from '../components/instagram'
import Bumper from '../components/bumper'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Bumper>
      <h2>Follow and Purchase</h2>
      <p>
        <a href="https://www.facebook.com/KatrinaDawnStudio/" className="btn">Facebook</a>
        <a href="https://www.etsy.com/ca/shop/KatrinaDawnStudio" className="btn">Etsy</a>
        <a href="https://www.instagram.com/_katrinadawnstudio/" className="btn">Instagram</a>
      </p>
    </Bumper>
    <Instagram />
    <Bumper>
      <h2>Contact me for commissions</h2>
      <p>
        <a href="mailto:hell%6F@ka%74rinad%61w%6E.c%61" className="btn">Send me an email</a>
      </p>
    </Bumper>
  </Layout>
)

export default IndexPage
