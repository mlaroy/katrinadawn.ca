import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
// import { kebabCase } from '../utils/kebab'

const ContentfulCorporate = props => (
  <StaticQuery
    query={CORP_QUERY}
    render={({ allContentfulBlogPost }) => (
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
              {allContentfulBlogPost.edges.map(edge => {
                const img = edge.node.featuredImage;
                return (
                  <a href={`/blog/${edge.node.slug}`} key={edge.node.id}>
                    {img && (
                      <img
                        alt={edge.node.title}
                        src={img.fluid.src}
                        srcSet={img.fluid.srcSet}
                        sizes={img.fluid.sizes}
                      />
                    )}
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

const CORP_QUERY = graphql`
  query CorporatePosts {
    allContentfulBlogPost(limit: 12, filter: {tags: {eq: "Business Commissions"}}, sort: {order: DESC, fields: [date]}) {
      edges {
        node {
          title
          tags
          slug
          featuredImage {
            id
            contentful_id
            fluid {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

export default ContentfulCorporate;
