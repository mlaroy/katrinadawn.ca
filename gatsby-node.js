/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulBlogPost(sort: { order: DESC, fields: [date]}) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      if (result.errors) {
        console.log('Error retrieving contentful data', result.errors);
      }
      // Resolve the paths to our template
      const blogPostTemplate = path.resolve('./src/templates/blogpost.js');
      // Then for each result we create a page.
      result.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: slash(blogPostTemplate),
          context: {
	          slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });
    })
    .catch(error => {
      console.log('Error retrieving contentful data', error);
    });
};

// Future improvement: possibly build schema to ensure blank fields
// don't break stuff?
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type BlogPost implements Node {
//       date: Date
//       title: String!
//       bodyText: String!
//       tags: String!
//     }
//   `
//   createTypes(typeDefs)
// }
