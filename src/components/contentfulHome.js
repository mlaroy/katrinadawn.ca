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
                  They depict journey. Here is a sample of home portraits I’ve painted.
                  Click an image to read the related blog post.
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
    allContentfulBlogPost(limit: 16, filter: {tags: {eq: "Home portrait"}}, sort: {order: DESC, fields: [date]}) {
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
