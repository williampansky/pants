import React from 'react';
// import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import Image from '@/components/Image';
import SEO from '@/components/SEO';
import PostClient from '@/components/PostClient';
import PostMeta from '@/components/PostMeta';

const Article = styled.article`
    img {
        max-width: 100%;
        height: auto;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    ul li + li {
        border-top: 1px solid #e5e5e5;
        margin-top: 10px;
        padding-top: 10px;
    }
`;

const Header = styled.header`
    box-sizing: content-box;
    margin: 0 auto;
    max-width: 900px;
    padding: 0 15px;

    @media (min-width: 640px) {
        padding: 0 30px;
    }

    @media (min-width: 960px) {
        padding: 0 40px;
    }
`;

const Hero = styled.div`
    box-sizing: border-box;
    margin: 2.5em auto;
    max-width: none;
`;

const Section = styled.section`
    box-sizing: content-box;
    margin: 0 auto;
    max-width: 740px;
    padding: 0 15px;

    @media (min-width: 640px) {
        padding: 0 30px;
    }

    @media (min-width: 960px) {
        padding: 0 40px;
    }
`;

const PostAvatar = styled.figure`
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    max-width: 200px;
    overflow: hidden;
`;

const Post = ({ data }) => {
    data = {
        id: data.contentfulCaseStudy.id,
        title: data.contentfulCaseStudy.title,
        slug: data.contentfulCaseStudy.slug,
        updatedAt: data.contentfulCaseStudy.updatedAt,
        category: data.contentfulCaseStudy.internal.type,
        client: {
            name: data.contentfulCaseStudy.client.name,
            website: data.contentfulCaseStudy.client.website,
            description: data.contentfulCaseStudy.client.description.description
                ? data.contentfulCaseStudy.client.description.description
                : null,
            logo: data.contentfulCaseStudy.client.logo,
            avatar: data.contentfulCaseStudy.client.avatar.localFile
                ? data.contentfulCaseStudy.client.avatar.localFile
                : null
        },
        project: {
            title: data.contentfulCaseStudy.project.title,
            website: data.contentfulCaseStudy.project.website,
            repository: data.contentfulCaseStudy.project.repository,
            description: data.contentfulCaseStudy.project.description
                .description
                ? data.contentfulCaseStudy.project.description.description
                : null
        },
        hero: data.contentfulCaseStudy.hero.localFile
            ? data.contentfulCaseStudy.hero.localFile
            : null,
        leadParagraph: data.contentfulCaseStudy.leadParagraph
            .childMarkdownRemark.html
            ? data.contentfulCaseStudy.leadParagraph.childMarkdownRemark.html
            : null,
        markdown: data.contentfulCaseStudy.markdown.childMarkdownRemark
            ? data.contentfulCaseStudy.markdown.childMarkdownRemark
            : null,
        sources: data.contentfulCaseStudy.sources
            ? data.contentfulCaseStudy.sources
            : null
    };

    // console.log(data);

    return (
        <Layout>
            <SEO title={data.title} />
            <Article>
                <Header>
                    <PostClient client={data.client} />
                    <h1>{data.title}</h1>
                    <PostMeta
                        category={data.category}
                        project={data.project.title}
                        datePublished={'123'}
                        dateModified={data.updatedAt}
                        timeToRead={data.markdown.timeToRead}
                        wordCount={data.markdown.wordCount.words}
                    />
                </Header>
                <Hero>
                    <Image src={data.hero.childImageSharp.fluid} />
                </Hero>
                <Section
                    id="leadParagraph"
                    className="text-lead"
                    dangerouslySetInnerHTML={{ __html: data.leadParagraph }}
                />
                <PostAvatar>
                    <Image src={data.client.avatar.childImageSharp.fluid} />
                </PostAvatar>
                <Section
                    id="markdown"
                    dangerouslySetInnerHTML={{ __html: data.markdown.html }}
                />
                {data.sources && (
                    <Section id="sources">
                        <h2>Sources</h2>
                        <ul>
                            {data.sources.map(source => (
                                <li key={source.url}>
                                    <a
                                        href={source.url}
                                        target="_blank"
                                        rel="noreferrer noopener nofollow"
                                    >
                                        {source.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Section>
                )}
            </Article>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulCaseStudy(slug: { eq: $slug }) {
            id
            title
            slug
            updatedAt(formatString: "MMMM Do, YYYY")
            internal {
                type
            }
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
            hero {
                localFile {
                    childImageSharp {
                        fluid(jpegProgressive: true, quality: 65) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            leadParagraph {
                childMarkdownRemark {
                    html
                }
            }
            markdown {
                childMarkdownRemark {
                    html
                    timeToRead
                    wordCount {
                        words
                    }
                }
            }
            sources {
                name
                url
            }
        }
    }
`;

Post.propTypes = {
    data: PropTypes.object.isRequired
};

export default Post;
