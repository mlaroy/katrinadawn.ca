import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const Instagram = () => (
  <StaticQuery
    query={INSTA_QUERY}
    render={({ allInstaNode }) => (
      <>
        <section>
          <div className="container text-center">
            <h2>See Katrina Dawn on Instagram</h2>
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
)

const INSTA_QUERY = graphql`
  query InstaQuery {
    allInstaNode(
      limit: 20
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
