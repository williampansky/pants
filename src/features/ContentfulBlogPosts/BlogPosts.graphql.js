import { graphql } from 'gatsby';

export const BlogPosts = graphql`
    fragment BlogPosts on ContentfulBlogPosts {
        allPosts {
            ... on ContentfulCaseStudy {
                client {
                    name
                    website
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
                    avatar {
                        localFile {
                            childImageSharp {
                                fluid(jpegProgressive: true, quality: 65) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
                datePublished(formatString: "MMMM Do, YYYY")
                hero {
                    localFile {
                        childImageSharp {
                            fluid(jpegProgressive: true, quality: 65) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                id
                internal {
                    content
                    description
                    ignoreType
                    mediaType
                    owner
                    type
                    fieldOwners
                    contentDigest
                }
                leadParagraph {
                    leadParagraph
                }
                project {
                    title
                    website
                    repository
                    description {
                        description
                    }
                }
                slug
                title
            }
            ... on ContentfulProject {
                client {
                    name
                    website
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
                    avatar {
                        localFile {
                            childImageSharp {
                                fluid(jpegProgressive: true, quality: 65) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
                id
                internal {
                    content
                    description
                    ignoreType
                    mediaType
                    owner
                    type
                    fieldOwners
                    contentDigest
                }
                repository
                title
                website
            }
        }
    }
`;
