import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby'
import { formatDate } from '../utils/dates';
// import { kebabCase } from '../utils/kebab'

const ContentfulCorporate = props => (
  <StaticQuery
    query={HOME_QUERY}
    render={({ allContentfulBlogPost }) => (
      <>
        <section style={{ background: '#fff'}} id="corporate">
          <div className="container">
            <div className="lg:w-3/4">
              <h2>From the Blog</h2>
            </div>
            <div className="blog-roll is-visible mt-8 mb-16">
              {allContentfulBlogPost.edges.map(edge => {
                  const img = edge.node.featuredImage;
                  const slug = edge.node.slug.toLowerCase();
                  const rendered = edge.node.bodyText.childMarkdownRemark.excerpt.replace(/ "/g, ' “');
                  return (
                    <article key={edge.node.contentful_id} className="shadow-md hover:shadow-lg blog-post">
                      {img && (
                        <Link to={`/blog/${slug}`} className="block">
                          <img src={img.file.url} alt=""/>
                        </Link>
                      )}
                      <div className="p-4">
                        <h2 className="mb-2 text-lg">
                          <Link to={`/blog/${slug}`} className="link no-underline hover:underline focus:underline">
                            {edge.node.title}
                          </Link>
                        </h2>
                        <p className="text-xs mb-4">{formatDate(edge.node.date)}</p>
                        <p className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: rendered }}></p>
                        <p>
                          {edge.node.tags && edge.node.tags.map(tag => {
                            return (
                              <span key={tag} className="btn btn-inverse btn-small text-xs capitalize">{tag}</span>
                            )
                          })}
                        </p>
                      </div>
                    </article>
                  )
                })}
            </div>

            <div className="text-center">
              <Link to="/blog" className="btn btn-inverse">View All Posts</Link>
            </div>
          </div>
        </section>
      </>
    )}
  />
);

const HOME_QUERY = graphql`
  query HomepagePosts {
    allContentfulBlogPost(
      limit: 3,
      sort: {order: DESC, fields: [date]}
      filter: {isFeatured: {ne: true}}
    ) {
      edges {
        node {
          contentful_id
          title
          tags
          slug
          date
          bodyText {
            childMarkdownRemark {
                excerpt
            }
          }
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default ContentfulCorporate;
