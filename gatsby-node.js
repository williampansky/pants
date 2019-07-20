/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const template = path.resolve(`src/templates/posts.jsx`);
    return graphql(`
        {
            allContentfulCaseStudy {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) return Promise.reject(result.errors);
        result.data.allContentfulCaseStudy.edges.forEach(({ node }) => {
            if (node) {
                createPage({
                    path: `/posts/${node.slug}`,
                    component: template,
                    context: {
                        slug: node.slug
                    }
                });
            }
        });
    });
};
