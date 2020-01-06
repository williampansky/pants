import { graphql } from 'gatsby';

export const Client = graphql`
    fragment client on ContentfulClient {
        avatar {
            localFile {
                childImageSharp {
                    fluid(jpegProgressive: true, quality: 65) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        createdAt(formatString: "MMMM Do, YYYY")
        description {
            description
        }
        logo {
            localFile {
                childImageSharp {
                    fluid(jpegProgressive: true, quality: 65) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    original {
                        height
                        width
                    }
                }
            }
        }
        name
        updatedAt(formatString: "MMMM Do, YYYY")
        website
    }
`;
