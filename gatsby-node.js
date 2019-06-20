const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const template = path.resolve("./src/templates/language.js");

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___stage], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(
          ({ node }, index, posts) => {
            const { slug: path } = node.frontmatter;
            const prev =
              index === posts.length - 1 ? null : posts[index + 1].node;
            const next = index === 0 ? null : posts[index - 1].node;

            createPage({
              path,
              component: template,
              context: {
                prev,
                next,
              },
            });
          }
        );
      })
    );
  });
};
