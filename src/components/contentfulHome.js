import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
// import { kebabCase } from '../utils/kebab'

const ContentfulHome = props => (
  <StaticQuery
    query={HOME_QUERY}
    render={({ allContentfulHomePortrait }) => (
      <>
        <section style={{ background: '#ddd'}}>
          <div className="container">
            <div className="lg:w-3/4">
              <h2>Home Portraits</h2>
                <p>
                  Home portraits capture years of life spent with loved ones. They capture dreams realized.
                  They depict journey. Here is a sample of home portraits I’ve painted.
                  Click an image to read the related blog post.
                </p>
            </div>
            <div id="instafeed" className="instafeed is-visible mt-8">
              {allContentfulHomePortrait.edges.map(edge => {
                const img = edge.node.featuredImage;
                return (
                  <a href={`/blog/${edge.node.blogPostReference.slug}`} key={edge.node.blogPostReference.slug}>
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
    allContentfulHomePortrait(sort: {order: DESC, fields: [date]}) {
      edges {
        node {
          title
          date
          featuredImage {
            fluid {
                src
                srcSet
            }
          }
          blogPostReference {
            slug
            id
          }
        }
      }
    }
  }
`

export default ContentfulHome;
