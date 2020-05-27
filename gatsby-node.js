/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(
          __dirname,
          'src/semantic/theme.config'
        ),
      },
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const BlogPost = path.resolve(`src/templates/BlogPost.tsx`);
  const TaggedPosts = path.resolve(`src/templates/TaggedPosts.tsx`);

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.postsRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;
    const blogPath = `/blog${slug}`;
    createPage({
      path: blogPath,
      component: BlogPost,
      context: { slug },
    });

    console.log(`Created Blog Post: ${blogPath}`);
  });

  result.data.tagsGroup.group.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: TaggedPosts,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode, basePath: 'content/blog' });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
