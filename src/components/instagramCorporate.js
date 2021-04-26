import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const InstagramCorporate = props => (
  <StaticQuery
    query={INSTA_QUERY}
    render={({ allInstaNode }) => (
      <>
        <section style={{ background: '#ddd'}} id="corporate">
          <div className="container">
            <div className="lg:w-3/4">
              <h2>Businesses</h2>
              <p>
                Aside from being contacted for private commissions, I’ve also had opportunity to work
                with several businesses in helping to bring their brand identity to life.
              </p>
            </div>
            <div id="instafeed" className="instafeed is-visible mt-8">
              {allInstaNode.edges.map(edge => {
                return (
                  <a href={edge.node.link} key={edge.node.id}>
                    <img
                      alt={`${edge.node.caption.substring(0, 100)}...`}
                      src={edge.node.original}
                      />
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </>
    )}
  />
);

const INSTA_QUERY = graphql`
  query CorporateQuery {
    allInstaNode(
      limit: 8
      filter: {
        caption: {
          regex: "/#corporateart/"
        }
      }
      sort: {
        fields: timestamp
        order: DESC
      }
    ) {
      edges {
        node {
          id
          caption
          original
        }
      }
    }
  }
`

export default InstagramCorporate;
