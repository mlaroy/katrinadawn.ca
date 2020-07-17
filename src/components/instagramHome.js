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
              <p>
                Home portraits capture years of life spent with loved ones. They capture dreams realized.
                Clients submit photos of a home to me by email. Multiple photos taken from multiple angles provide a range of reference. Capturing the surrounding context – the big tree in the front yard, the fence lining the property, the adjacent telephone pole – it all adds context. Provide more context than less, and through discussion we can settle on what to include in the painting.
              </p>
              <p>Don’t have any photos? Not a problem. I’ve painted a number of home portraits using Google Street View for clients unable to locate pictures of a childhood home.
                The recommended minimum size for a home portrait is 8x10.
              </p>
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
