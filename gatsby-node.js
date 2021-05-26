const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    const category = node.frontmatter.sidebar_category;
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
    createNodeField({
      node,
      name: "sidebarCategory",
      value: category,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("./src/templates/post.js");
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              sidebarCategory
            }
          }
        }
      }
    }
  `);

  response.data.allMarkdownRemark.edges.forEach((edge) => {
    // 1. Get path to template
    // 2. Get markdown data
    // 3. Create new pages

    createPage({
      component: postTemplate,
      path: `/docs/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        sidebarCategory: edge.node.fields.sidebarCategory,
      },
    });
  });
};
