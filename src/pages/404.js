import React from 'react'
import Layout from '../components/layout'
import logo from '../images/logo.png';
import ship from '../images/pirate-ship.jpg';

const NotFoundPage = () => (
  <Layout>
    <div className="h-screen flex flex-col justify-center">
        <div className="header-content text-center">
          <div>
            <span className="screen-reader">Katrina Dawn Studio</span>
            <img src={logo} alt="Katrina Dawn Studio Logo" className="logo-img" />
          </div>
          <h1>NOT FOUND</h1>
          <p>This page doesn't exist <span role="img" aria-label="confused emoji">😕</span></p>
        </div>
        <img src={ship} alt="Katrina Dawn Studio Logo" className="ship-img" />
      </div>
  </Layout>
)

export default NotFoundPage
