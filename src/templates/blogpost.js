import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Section from '../components/Section';
import { formatDate } from '../utils/dates';
import Helmet from 'react-helmet';

const BlogPost = ({ data }) => {
  const { title, bodyText, featuredImage, date, referenceImage, finishedProduct } = data.contentfulBlogPost;
  const { site } = data;

  const rendered = bodyText.childMarkdownRemark.html.replace(/ "/g, ' “');
  return (
    <Layout>
      <Helmet
        meta={[
            {
              name: 'description',
              content: bodyText.childMarkdownRemark.excerpt
            },
            {
              property: `title`,
              content: `${title} | ${site.siteMetadata.title}`
            },
            {
              property: `og:title`,
              content: `${title} | ${site.siteMetadata.title}`
            },
            {
              property: `og:description`,
              content: bodyText.childMarkdownRemark.excerpt,
            },
            {
              property: `og:image`,
              content: `https:${featuredImage.file.url.split('?')[0]}`,
            }
        ]}
        >
      </Helmet>
      <Section names="blog-post">
        <div className="mb-8">
          <h1 className="mb-2">{title}</h1>
          <p>{formatDate(date)}</p>
          {/* {tags && (
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
          )} */}
        </div>
        <div className="blog-post-content">
          <div
            className="blog-content">
            {featuredImage && (
              <img
              alt={title}
              src={featuredImage.fluid.src}
              srcSet={featuredImage.fluid.srcSet}
              sizes={featuredImage.fluid.sizes}
              className="lg:ml-4 mb-8 lg:mb-4 block mx-auto lg:float-right md:w-2/5" />
              )}
            <span dangerouslySetInnerHTML={{ __html: rendered }} />
            {referenceImage !== null && finishedProduct !== null && (
                <div className="blog-content-compare md:flex mt-8 lg:-ml-16 lg:-mr-16">
                  <div className="w-full md:w-1/2 mb-4 md:mr-2 relative compare-image">
                    <img src={referenceImage.fluid.src} alt={referenceImage.description} className="block w-full shadow-md absolute object-cover pin-y pin-x h-full" />
                    <span className="absolute pin-b left-0 px-3 py-2 text-xs z-10 bg-white">
                      Reference Photo
                    </span>
                  </div>
                  <div className="w-full md:w-1/2 mb-4 md:ml-2 relative compare-image">
                    <img src={finishedProduct.fluid.src} alt={finishedProduct.description} className="block w-full shadow-md absolute object-cover pin-y pin-x h-full" />
                    <span className="absolute pin-b left-0 px-3 py-2 text-xs z-10 bg-white">
                      Finished Painting
                    </span>
                  </div>
                </div>
            )}
          </div>
          {/* <div className="featured-image mb-8 md:w-1/2 m-auto">
          </div> */}
        </div>
        <Link to="/blog">View more posts</Link>
      </Section>
    </Layout>
  );
};


export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(id: { eq: $id }) {
        title
        date
        featuredImage {
            id
            fluid {
                src
                srcSet
                sizes
            }
            file {
              url
            }
        }
        referenceImage {
          fluid {
            src
            srcSet
            sizes
          }
          file {
            url
          }
        }
        finishedProduct {
          description
          fluid {
            src
          }
          file {
            url
          }
        }
        tags
        bodyText {
            childMarkdownRemark {
                excerpt
                html
            }
        }
    }
  }
`;

export default BlogPost;
