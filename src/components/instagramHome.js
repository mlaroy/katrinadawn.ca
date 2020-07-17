import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const Instagram = props => (
  <StaticQuery
    query={INSTA_QUERY}
    render={({ allInstaNode }) => (
      <>
        <section className="bg-brown-light">
          <div className="container">
            <h2>Home Portraits</h2>
            <div className="lg:w-3/4">
              <p>Home portraits capture for many the meaningful location of years spent together as family.
                Clients submit photographs of the location and Katrina is able to paint from those. Multiple images are better for reference, and clients are encouraged to submit photos that show the full house along with the immediate surrounding landscape for context. Katrina has painted a number of home portraits using Google Street View for clients unable to locate pictures of a childhood home.
                The recommended minimum size for a home portrait is 8x10.</p>
            </div>
            <div id="instafeed" className="instafeed is-visible">
              {allInstaNode.edges.map(edge => {
                return (
                  <a href={`https://www.instagram.com/p/${edge.node.id}`} key={edge.node.id}>
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
  query homePortraitQuery {
    allInstaNode(
      limit: 8
      filter: {
        caption: {
          regex: "/#homeportrait/"
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
          preview
          original
          mediaType
          internal {
            type
            contentDigest
            owner
          }
        }
      }
    }
  }
`

export default Instagram;
