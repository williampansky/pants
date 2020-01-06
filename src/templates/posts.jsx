import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import Image from '@/components/Image';
import SEO from '@/components/SEO';
import PostClient from '@/components/PostClient';
import PostMeta from '@/components/PostMeta';

const HeaderNav = styled.header`
    .uk-navbar-item,
    .uk-navbar-nav > li > a,
    .uk-navbar-toggle {
        font-size: 16px;
        height: 44px;
        min-height: 44px;
        text-transform: none;
    }

    .uk-logo {
        font-weight: bold;
    }
`;

const Article = styled.article`
    margin: 40px auto;

    @media (min-width: 960px) {
        margin: 40px auto 70px;
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

    a {
        text-decoration: underline;

        &:hover,
        &:focus {
            text-decoration: none;
        }
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
        markdown: {
            childMarkdownRemark: {
                timeToRead,
                wordCount: { words }
            }
        },
        project,
        slug,
        sources,
        title,
        updatedAt
    } = contentfulCaseStudy;

    const postAvatarObject =
        client &&
        client.avatar &&
        client.avatar.localFile &&
        client.avatar.localFile.childImageSharp &&
        client.avatar.localFile.childImageSharp.fluid;
    const postBody =
        markdown &&
        markdown.childMarkdownRemark &&
        markdown.childMarkdownRemark.html;
    const postHeroImage =
        hero &&
        hero.localFile &&
        hero.localFile.childImageSharp &&
        hero.localFile.childImageSharp.fluid;
    const postLeadParagraph =
        leadParagraph &&
        leadParagraph.childMarkdownRemark &&
        leadParagraph.childMarkdownRemark.html;
    const projectTitle = project && project.title;

    return (
        <Layout>
            <SEO title={title} />

            <HeaderNav>
                <nav className="uk-navbar-container uk-navbar-transparent uk-navbar">
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item">
                            <Link className="uk-navbar-item uk-logo" to="/">
                                William Pansky
                            </Link>
                        </div>
                    </div>
                    <div className="uk-navbar-right uk-visible@s">
                        <ul className="uk-navbar-nav">
                            <nav
                                className="wep-navbar uk-navbar-container uk-navbar-transparent uk-navbar"
                                uk-navbar=""
                            >
                                <div className="uk-navbar-center">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <Link to="/">Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="/resume">Resume</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </ul>
                    </div>
                </nav>
            </HeaderNav>

            <Article data-slug={slug} id={id}>
                <Header>
                    <PostClient client={client} />
                    <h1>{title}</h1>
                    <PostMeta
                        category={type}
                        dateModified={updatedAt}
                        datePublished={datePublished}
                        project={projectTitle}
                        timeToRead={timeToRead}
                        wordCount={words}
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
                    <Image src={postAvatarObject} />
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
