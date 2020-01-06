import { graphql } from 'gatsby';

export const Hero = graphql`
    fragment hero on ContentfulCaseStudy {
        hero {
            localFile {
                childImageSharp {
                    fluid(jpegProgressive: true, quality: 65) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    }
`;
