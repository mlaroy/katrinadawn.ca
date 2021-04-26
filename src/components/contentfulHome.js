import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { kebabCase } from '../utils/kebab'

const ContentfulHome = props => (
  <StaticQuery
    query={HOME_QUERY}
    render={({ allContentfulBlogPost }) => (
      <>
        <section style={{ background: '#ddd'}}>
          <div className="container">
            <div className="lg:w-3/4">
              <h2>Home Portraits</h2>
                <p>
                  Home portraits capture years of life spent with loved ones. They capture dreams realized.
                  Clients submit photos of a home to me by email. Multiple photos taken from multiple angles provide a range of reference. Capturing the surrounding context – the big tree in the front yard, the fence lining the property, the adjacent telephone pole – it all adds context. Provide more context than less, and through discussion we can settle on what to include in the painting.
                </p>
                <p>Don’t have any photos? Not a problem. I’ve painted a number of home portraits using Google Street View for clients unable to locate pictures of a childhood home.
                  The recommended minimum size for a home portrait is 8x10.
                </p>
            </div>
            <div id="instafeed" className="instafeed is-visible mt-8">
              {allContentfulBlogPost.edges.map(edge => {
                const img = edge.node.featuredImage;
                return (
                  <a href={`/blog/${edge.node.slug.toLowerCase()}`} key={edge.node.id}>
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

const HOME_QUERY = graphql`
  query HomePosts {
    allContentfulBlogPost(limit: 8, filter: {tags: {eq: "Home portrait"}}, sort: {order: DESC, fields: [date]}) {
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

export default ContentfulHome;
