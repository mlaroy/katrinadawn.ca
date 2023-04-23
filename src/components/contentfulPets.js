import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
// import { kebabCase } from '../utils/kebab'

const ContentfulPets = props => (
  <StaticQuery
    query={PETS_QUERY}
    render={({ allContentfulPetPortrait }) => (
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
              {allContentfulPetPortrait.edges.map(edge => {
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

const PETS_QUERY = graphql`
  query PetsPosts {
    allContentfulPetPortrait(limit: 12, sort: {order: DESC, fields: [date]}) {
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

export default ContentfulPets;
