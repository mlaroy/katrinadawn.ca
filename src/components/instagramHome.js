import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const Instagram = props => (
  <StaticQuery
    query={INSTA_QUERY}
    render={({ allInstagramContent }) => (
      <>
        <section className="bg-color">
          <div className="container">
            <h2>Home Portraits</h2>
            <div id="instafeed" className="instafeed is-visible">
              {allInstagramContent.edges.map(edge => {
                return (
                  <a href={edge.node.link} key={edge.node.id}>
                    <img
                      alt={`${edge.node.caption.text.substring(0, 100)}...`}
                      src={edge.node.images.standard_resolution.url}
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
    allInstagramContent(limit: 20, filter: {
      tags: {
        eq: "homeportrait"
      }
    }){
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
