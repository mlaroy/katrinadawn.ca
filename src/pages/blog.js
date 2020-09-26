import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout';
import Section from '../components/Section';
import { Link } from 'gatsby';
import { formatDate } from '../utils/dates';

class Blog extends Component {
  render() {
    return (
      <StaticQuery
        query={POST_ARCHIVE_QUERY}
        render={({allContentfulBlogPost}) => (
          <Layout>
            <Section>
              <h1 className="mb-8">Blog</h1>
              <div className="blog-roll">
                {allContentfulBlogPost.edges.map(edge => {
                  const img = edge.node.featuredImage;
                  return (
                    <div key={edge.node.contentful_id} className="shadow-md hover:shadow-lg blog-post">
                      {img && (
                        <div>
                          <img src={img.file.url} alt=""/>
                        </div>
                      )}
                      <div className="p-4">
                        <h2 className="mb-2 text-lg">
                          <Link to={`/blog/${edge.node.slug}`} className="link no-underline hover:underline focus:underline">
                            {edge.node.title}
                          </Link>
                        </h2>
                        <p className="text-xs mb-4">{formatDate(edge.node.date)}</p>
                        <p className="text-sm mb-0" dangerouslySetInnerHTML={{ __html: edge.node.bodyText.childMarkdownRemark.excerpt }}></p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Section>
          </Layout>
        )}
      >
      </StaticQuery>
    )
  }
}

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allContentfulBlogPost(sort: {
      order: DESC,
      fields: [date]
    }) {
      edges {
        node {
          contentful_id
          title
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
`;

export default Blog;
