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
    margin: 40px auto;

    @media (min-width: 960px) {
        margin: 70px auto;
    }

    img {
        max-width: 100%;
        height: auto;
        box-sizing: border-box;
    }

    .uk-list > li:nth-child(n + 2),
    .uk-list > li > ul {
        margin-top: 4px;
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

const PostBody = styled.div`
    figure {
        margin: 0 0 calc(16px * 2) 0;
        max-width: 100%;
        position: relative;
        vertical-align: middle;

        img {
            position: relative;
            z-index: 1;
        }

        &:after {
            background: #999;
            border-radius: 100%;
            bottom: 14px;
            content: '';
            filter: blur(6px);
            height: 30px;
            left: 10px;
            position: absolute;
            right: 10px;
            z-index: 0;
        }
    }

    figcaption {
        color: #757575;
        font: normal 10px/1.15 sans-serif;
        letter-spacing: 0.875px;
        text-align: center;
        text-transform: uppercase;
        display: block;
        margin-top: 8px;
    }
`;

const Post = ({ data }) => {
    const { contentfulCaseStudy } = data;
    const {
        client,
        datePublished,
        hero,
        id,
        internal: { type },
        leadParagraph,
        markdown,
        project,
        slug,
        sources,
        title,
        updatedAt
    } = contentfulCaseStudy;

    const postHeroImage =
        hero &&
        hero.localFile &&
        hero.localFile.childImageSharp &&
        hero.localFile.childImageSharp.fluid;
    const postBody =
        markdown &&
        markdown.childMarkdownRemark &&
        markdown.childMarkdownRemark.html;
    const postLeadParagraph =
        leadParagraph &&
        leadParagraph.childMarkdownRemark &&
        leadParagraph.childMarkdownRemark.html;
    const projectTitle = project && project.title;

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
            <SEO title={title} />
            <Article data-slug={slug} id={id}>
                <Header>
                    <PostClient client={client} />
                    <h1>{title}</h1>
                    <PostMeta
                        category={type}
                        dateModified={updatedAt}
                        datePublished={datePublished}
                        project={projectTitle}
                        timeToRead={data.markdown.timeToRead}
                        wordCount={data.markdown.wordCount.words}
                    />
                </Header>

                <Hero>
                    <Image src={postHeroImage} />
                </Hero>

                <Section
                    className="uk-text-lead"
                    dangerouslySetInnerHTML={{ __html: postLeadParagraph }}
                    id="leadParagraph"
                />

                <PostAvatar>
                    <Image src={data.client.avatar.childImageSharp.fluid} />
                </PostAvatar>

                <Section id="postSection">
                    <PostBody
                        dangerouslySetInnerHTML={{ __html: postBody }}
                        id="markdown"
                    />
                </Section>

                {sources && sources.length ? (
                    <Section id="sources">
                        <h2>{`Sources`}</h2>
                        <ul className="uk-list uk-list-bullet uk-text-meta">
                            {sources.map(source => {
                                const { name, url } = source;
                                return (
                                    <li key={url}>
                                        <a
                                            href={url}
                                            rel="noreferrer noopener nofollow"
                                            target="_blank"
                                        >
                                            {name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </Section>
                ) : null}
            </Article>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulCaseStudy(slug: { eq: $slug }) {
            client {
                ...client
            }
            datePublished(formatString: "MMMM Do, YYYY")
            ...hero
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
            project {
                ...project
            }
            slug
            sources {
                name
                url
            }
            title
            updatedAt(formatString: "MMMM Do, YYYY")
        }
    }
`;

Post.propTypes = {
    data: PropTypes.object.isRequired
};

export default Post;
