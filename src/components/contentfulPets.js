import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { kebabCase } from '../utils/kebab'

const ContentfulPets = props => (
  <StaticQuery
    query={PETS_QUERY}
    render={({ allContentfulBlogPost }) => (
      <>
        <section>
          <div className="container">
            <div className="lg:w-3/4">
              <h2>Pet Portraits</h2>
              <p>
                A pet is a member of the family, and sometimes is better company than anybody else.
                Here are some pet portraits I’ve had the honour of working on over the years.
                Click an image to read the associated blog post.
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

const PETS_QUERY = graphql`
  query PetsPosts {
    allContentfulBlogPost(limit: 12, filter: {tags: {eq: "Pet Portrait"}}, sort: {order: DESC, fields: [date]}) {
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

export default ContentfulPets;
