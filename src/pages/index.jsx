import React, { useCallback, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Name from '@/components/Name';
import GridItem from '@/components/GridItem';
import TextLead from '@/components/TextLead';
import Employment from '@/components/Employment';
import ExternalLink from '@/components/ExternalLink';
import FONTS from '@/fonts.json';

const IndexPage = ({ data }) => {
    const [fontObject, setFontObject] = useState({
        headlineFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        headlineWeight: 400,
        textFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        textWeight: 400
    });

    const getRandomFontFamily = useCallback((array = FONTS) => {
        const selection = Math.floor(Math.random() * array.length);
        setFontObject(array[selection]);
    }, []);

    useEffect(() => {
        getRandomFontFamily();
    }, [getRandomFontFamily]);

    return (
        <Layout>
            <SEO title="Home" />
            <div
                className="uk-grid uk-grid-collapse uk-child-width-expand"
                uk-grid="masonry: false;"
                uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200;"
            >
                <div>
                    <GridItem>
                        <Name font={fontObject} />
                    </GridItem>
                </div>

                <div className="uk-width-auto">
                    <GridItem>
                        <TextLead
                            text="Front-end web developer and graphic designer with ability to solve complex
      website interface problems through creative and UX-minded solutions."
                        />
                    </GridItem>
                </div>

                <div>
                    <GridItem>
                        <Employment />
                    </GridItem>
                </div>

                <div>
                    <GridItem padding={false}>
                        <ExternalLink
                            href="https://www.linkedin.com/in/williampansky/"
                            text="linkedin.com/in/williampansky"
                        />
                    </GridItem>
                </div>

                <div>
                    <GridItem padding={false}>
                        <ExternalLink
                            href="mailto:williampansky@gmail.com"
                            text="williampansky@gmail.com"
                        />
                    </GridItem>
                </div>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query a {
        allContentfulBlogPosts {
            nodes {
                featuredPost {
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
                }
                allPosts {
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
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.object.isRequired
};

export default IndexPage;
