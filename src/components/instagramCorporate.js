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
              <h2>Corporate</h2>
              <p>
                Corporations or small business owners are welcome to submit imagery or a detailed concept of what they would like captured through watercolour sketching. In addition to the original, replicates of the painting in print material or digital format are available for a licensing fee.
                Below are a few corporate customers that I have worked with.
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
      limit: 4
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
