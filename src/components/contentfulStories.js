import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
// import { kebabCase } from '../utils/kebab'

const ContentfulStories = props => (
  <StaticQuery
    query={STORY_QUERY}
    render={({ allContentfulBlogPost }) => (
      <>
        <section style={{ background: '#ddd'}} id="stories">
          <div className="container">
            <div className="lg:w-3/4">
              <h2>Story Portraits</h2>
              <p>
              Story Portraits are a unique way to showcase a montage of memories. Customized to include as few or as many elements as desired, spanning a short or long time frame,
              a Story Portrait makes for an extra-thoughtful gift for someone special.
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

const STORY_QUERY = graphql`
  query StoryPosts {
    allContentfulBlogPost(limit: 12, filter: {tags: {eq: "Story Portrait"}}, sort: {order: DESC, fields: [date]}) {
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

export default ContentfulStories;
