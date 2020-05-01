const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

const categories = require(`./src/utils/categories`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      title: String!
      date(
        difference: String
        formatString: String
        fromNow: Boolean
        locale: String
      ): Date!
      category: String!
      subcategory: String
      tags: [String]
      delivery: String!
      description: String!
      address: String
      background: String
      email: String
      site: String 
      telefone: String
      whatsapp: String
      instagram: String
      facebook: String
      image: String
    }
  `;
  createTypes(typeDefs);
};

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug}`,
    });
  }
};

// To create the posts pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
              category
              subcategory
              tags
              address
              background
              email
              site
              telefone
              whatsapp
              instagram
              facebook
              delivery
              image
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      });
    });

    const postsPerPage = 100;
    const numPages = Math.ceil(posts.length / postsPerPage);
    const pagination = posts.length > postsPerPage;

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-list.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
          pagination,
        },
      });
    });

    categories.forEach(category => {
      createPage({
        path: category.slug,
        component: path.resolve(`./src/templates/category.js`),
        context: {
          title: category.title,
          subcategories: category.subcategories,
          color: category.color,
          slug: category.slug,
        },
      });
    });
  });
};
