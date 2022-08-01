import React, { Component, useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout';
import Section from '../components/Section';
import CategoriesFilter from '../components/categoriesFilter';
import { Link } from 'gatsby';
import { formatDate } from '../utils/dates';
// import { kebabCase } from '../utils/kebab'
const Blog = () => {

    const [activeTags, setActiveTags] = useState([]);

    useEffect(() => {
      console.log({ activeTags })
    }, [activeTags]);


  return (
    <StaticQuery
      query={POST_ARCHIVE_QUERY}
      render={({allContentfulBlogPost}) => (
        <Layout>
          <Section>
            <h1 className="mb-8">Blog</h1>
            <CategoriesFilter
              categories={allContentfulBlogPost}
              activeTags={activeTags}
              setActiveTags={setActiveTags}
            />
            <div className="blog-roll">
              {allContentfulBlogPost.edges
                .filter(edge => {
                  if(activeTags.length === 0) {
                    return true;
                  }
                  return edge.node.tags !== null && edge.node.tags.some(tag => activeTags.includes(tag));
                })
              .map(edge => {
                const img = edge.node.featuredImage;
                const slug = edge.node.slug.toLowerCase();
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
                      <p className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: edge.node.bodyText.childMarkdownRemark.excerpt }}></p>
                      <p>
                        {edge.node.tags && edge.node.tags.map(tag => {
                          return (
                            <span className="btn btn-inverse btn-small text-xs">{tag}</span>
                          )
                        })}
                      </p>
                    </div>
                  </article>
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
          tags
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
