import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby'
import { formatDate } from '../utils/dates';

const ContentfulFeaturedPost = props => (
    <StaticQuery
        query={FEATURED_QUERY}
        render={({ allContentfulBlogPost }) => (
            <>
                <section id="featured">
                    <div className="container">
                        <h2 className="text-center">Featured Work</h2>
                        {allContentfulBlogPost.edges.map(edge => {
                            const img = edge.node.featuredImage;
                            const slug = edge.node.slug.toLowerCase();
                            const rendered = edge.node.bodyText.childMarkdownRemark.excerpt.replace(/ "/g, ' “');
                            return (
                                <article key={edge.node.contentful_id} className="shadow-md hover:shadow-lg featured-post lg:flex gap-8">
                                    {img && (
                                        <Link to={`/blog/${slug}`} className="block mb-0">
                                            <img src={img.file.url} alt="" className="block"/>
                                        </Link>
                                    )}
                                    <div className="p-6 lg:px-8 flex flex-col lg:justify-center">
                                        <h2 className="mb-2 text-lg">
                                            <Link to={`/blog/${slug}`} className="link no-underline hover:underline focus:underline">
                                                {edge.node.title}
                                            </Link>
                                        </h2>
                                        <p className="text-xs mb-4">{formatDate(edge.node.date)}</p>
                                        <p className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: rendered }}></p>
                                        <p className="mb-0">
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
                </section>
            </>
        )}
    />
);

const FEATURED_QUERY = graphql`
  query FeaturedPost {
    allContentfulBlogPost(
        limit: 1,
        sort: {order: DESC, fields: [date]}
        filter: {isFeatured: {eq: true}}
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
                excerpt(pruneLength: 250)
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

export default ContentfulFeaturedPost
