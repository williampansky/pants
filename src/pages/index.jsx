import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <div>{data.allContentfulBlogPosts.nodes[0].featuredPost.title}</div>
        {data.allContentfulBlogPosts.nodes[0].allPosts.map(node => (
            <div key={node.id}>{node.title}</div>
        ))}
    </Layout>
);

export const pageQuery = graphql`
    query HomepageContent {
        allContentfulBlogPosts {
            nodes {
                featuredPost {
                    id
                    title
                    client {
                        name
                        website
                        description {
                            description
                        }
                        logo {
                            localFile {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
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
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                    project {
                        title
                        website
                        repository
                        description {
                            description
                        }
                    }
                    leadParagraph {
                        leadParagraph
                    }
                    introduction {
                        introduction
                    }
                    objective {
                        objective
                    }
                    development {
                        development
                    }
                    conclusion {
                        conclusion
                    }
                    sources {
                        sources
                    }
                }
                allPosts {
                    id
                    title
                    client {
                        name
                        website
                        description {
                            description
                        }
                        logo {
                            localFile {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
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
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                    project {
                        title
                        website
                        repository
                        description {
                            description
                        }
                    }
                    leadParagraph {
                        leadParagraph
                    }
                    introduction {
                        introduction
                    }
                    objective {
                        objective
                    }
                    development {
                        development
                    }
                    conclusion {
                        conclusion
                    }
                    sources {
                        sources
                    }
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.object.isRequired
};

export default IndexPage;
