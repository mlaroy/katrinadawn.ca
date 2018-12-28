import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Nav from '.nav';
import Footer from './footer';

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={`${data.site.siteMetadata.title} | Original Watercolour Sketching - Vancouver, BC`}
          meta={[
            { name: 'description', content: 'Katrina is a local artist specializing in original watercolour sketching. Purchase original artwork and stationary at local markets, and contact for commissions. Her work is also available for purchase online at Etsy. Based in Vancouver, BC.' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
          <Nav />
          {children}
          <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
