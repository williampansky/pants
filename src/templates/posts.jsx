import React from 'react';
// import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import styled from 'styled-components';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const Post = ({ data }) => {
    const post = data.contentfulCaseStudy;

    return (
        <Layout>
            <SEO title={post.title} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulCaseStudy(slug: {eq: $slug}) {
            id
            title
            slug
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
`;

Post.propTypes = {
    data: PropTypes.object.isRequired
};

export default Post;
