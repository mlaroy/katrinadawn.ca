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
              <p>
                A pet is like another member of the family. Who but the family can recall with fondness the rambunctious puppy years, sassy swing of a cat tail, or just comfort of their presence? Sometimes your pet is truly the best company.
              </p>
              <p>
              Clients should submit multiple photos. Clear photos taken with good natural light are best to showcase the colour of the fur/hair Be sure to send a photo capturing the eyes and avoid sending photos taken with a flash.
              The recommended minimum size for a pet portrait is 6x8.</p>
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
