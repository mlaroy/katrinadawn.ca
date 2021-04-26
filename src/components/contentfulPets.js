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
                A pet is like another member of the family. Who but the family can recall with fondness the rambunctious puppy years, sassy swing of a cat tail, or just comfort of their presence? Sometimes your pet is truly the best company.
              </p>
              <p>
              Clients should submit multiple photos. Clear photos taken with good natural light are best to showcase the colour of the fur/hair Be sure to send a photo capturing the eyes and avoid sending photos taken with a flash.
              The recommended minimum size for a pet portrait is 6x8.</p>
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
    allContentfulBlogPost(limit: 8, filter: {tags: {eq: "Pet Portrait"}}, sort: {order: DESC, fields: [date]}) {
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
