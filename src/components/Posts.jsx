import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <a
        href={`posts/${data.allContentfulBlogPosts.nodes[0].featuredPost.slug}`}
      >
        {data.allContentfulBlogPosts.nodes[0].featuredPost.title}
      </a>
    </div>
    {data.allContentfulBlogPosts.nodes[0].allPosts.map(node => (
      <div key={node.id}>
        <a href={`posts/${node.slug}`}>{node.title}</a>
      </div>
    ))}
  </Layout>
);

// export const pageQuery = graphql`
//   query HomepageContent {
//     allContentfulBlogPosts {
//       nodes {
//         featuredPost {
//           id
//           title
//           slug
//           client {
//             name
//             website
//             description {
//               description
//             }
//             logo {
//               localFile {
//                 childImageSharp {
//                   fluid {
//                     ...GatsbyImageSharpFluid
//                   }
//                   original {
//                     height
//                     width
//                   }
//                 }
//               }
//             }
//             avatar {
//               localFile {
//                 childImageSharp {
//                   fluid(jpegProgressive: true, quality: 65) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//           project {
//             title
//             website
//             repository
//             description {
//               description
//             }
//           }
//         }
//         allPosts {
//           id
//           title
//           slug
//           client {
//             name
//             website
//             description {
//               description
//             }
//             logo {
//               localFile {
//                 childImageSharp {
//                   fluid {
//                     ...GatsbyImageSharpFluid
//                   }
//                   original {
//                     height
//                     width
//                   }
//                 }
//               }
//             }
//             avatar {
//               localFile {
//                 childImageSharp {
//                   fluid(jpegProgressive: true, quality: 65) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//           project {
//             title
//             website
//             repository
//             description {
//               description
//             }
//           }
//         }
//       }
//     }
//   }
// `;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;
