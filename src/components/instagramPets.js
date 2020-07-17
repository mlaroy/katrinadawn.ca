import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const Instagram = props => (
  <StaticQuery
    query={INSTA_QUERY}
    render={({ allInstaNode }) => (
      <>
        <section>
          <div className="container">
            <div className="lg:w-3/4">
              <h2>Pet Portraits</h2>
              <p>Pet portraits are most often commissioned for families who have lost a pet. Multiple photos of the pet are submitted to the artist for reference. The recommended minimum size for a pet portrait is 6x8.</p>
            </div>
            <div id="instafeed" className="instafeed is-visible">
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
  query petPortraitQuery {
    allInstaNode(
      limit: 8
      filter: {
        caption: {
          regex: "/#petportrait/"
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
