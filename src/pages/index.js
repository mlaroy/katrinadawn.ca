import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Instagram from '../components/instagram'
import Bumper from '../components/bumper'
import Footer from '../components/footer'
import Follow from '../components/follow'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Follow />
    <Instagram />
    <Bumper />
    <Footer />
  </Layout>
)

export default IndexPage
