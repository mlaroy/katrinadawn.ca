import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Section from '../components/Section';

const BlogList = ({ data }) => {
  const { title, content, featuredImage, tags, publishDate } = data.contentfulBlogPost;
  // console.log(featuredImage);

  return (
    <Layout>
      <Section names="blog-post">
        <div className="mb-8">
          <h1 className="mb-2">{title}</h1>
          <p>{formatDate(publishDate)}</p>
          <div className="tags">
            {tags.map(tag => (
              <a
                className="tag inline-block text-white bg-grey-dark rounded text-sm px-2 py-1 no-underline hover:underline"
                href={`/blog?category=${tag}`}
                key={tag}>
                {tag}
              </a>
            ))}
          </div>
        </div>
        <div className="featured-image">
          {featuredImage && (
              <img alt={title} src={featuredImage.fluid.src} srcSet={featuredImage.fluid.srcSet} sizes={featuredImage.fluid.sizes} />
          )}
        </div>
        <div className="blog-post-content">
          <div dangerouslySetInnerHTML={{ __html: bodyText.childMarkdownRemark.html }}></div>
        </div>
      </Section>
    </Layout>
  );
};

const formatDate = date => {
  const published = new Date(date);
  return published.toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
        title
        date
        featuredImage {
            id
            fluid {
                src
                srcSet
                sizes
            }
        }
        # tags
        bodyText {
            childMarkdownRemark {
                html
            }
        }
    }
  }
`;

export default BlogList;
