import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const Instagram = () => (
  <StaticQuery
    query={INSTA_QUERY}
    render={({ allInstagramContent }) => (
      <>
        <section>
          <div className="container">
            <h2>See me on Instagram</h2>
            <div id="instafeed" className="instafeed is-visible">
              {allInstagramContent.edges.map(edge => {
                return (
                  <a href={edge.node.link}>
                    <img
                      alt={`${edge.node.caption.text.substring(0, 100)}...`}
                      src={edge.node.images.standard_resolution.url}
                      key={edge.node.id} />
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
    allInstagramContent(limit: 20) {
      edges {
        node {
          id
          link
          caption {
            text
          }
          images {
            standard_resolution {
              url
            }
          }
        }
      }
    }
  }
`

export default Instagram;
