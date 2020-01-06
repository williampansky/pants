import React, { useCallback, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Employment from '@/components/Employment';
import Post from '@/components/Post';
import BlogPosts from '@/features/ContentfulBlogPosts/BlogPosts.container';

const IndexPage = ({ data }) => {
    const {
        allContentfulEmployer,
        allContentfulBlogPosts,
        contentfulBlogPosts,
        site: {
            siteMetadata: { author, description }
        }
    } = data;

    const employers = allContentfulEmployer && allContentfulEmployer.nodes;
    const blogPosts = allContentfulBlogPosts && allContentfulBlogPosts.nodes[0];
    const allPosts = blogPosts && blogPosts.allPosts;
    const featuredPost = blogPosts && blogPosts.featuredPost;

    return (
        <Layout>
            <SEO title="Home" />
            <section className="uk-section">
                <div className="uk-container">
                    <h1 className="uk-heading-large">{author}</h1>
                    <p className="uk-text-lead">{description}</p>
                </div>
            </section>
            <section className="uk-background-secondary">
                <div
                    className="uk-grid uk-grid-collapse uk-grid-match uk-child-width-1-2@s uk-child-width-1-4@m"
                    uk-grid=""
                >
                    {employers.map((employer, idx) => {
                        const {
                            dateEnd,
                            dateStart,
                            id,
                            location,
                            name,
                            title,
                            website
                        } = employer;
                        return (
                            <div
                                className={idx !== 0 ? 'uk-visible@m' : ''}
                                key={id}
                            >
                                <Employment
                                    dateEnd={dateEnd}
                                    dateStart={dateStart}
                                    id={id}
                                    location={location}
                                    name={name}
                                    title={title}
                                    visible={idx[0]}
                                    website={website}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
            <BlogPosts data={contentfulBlogPosts} />
            {/* <section>
                <div
                // className="uk-grid uk-grid-collapse uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl"
                // uk-grid="masonry: true;"
                >
                    <div>
                        <Post
                            id={featuredPost.id}
                            title={featuredPost.title}
                            slug={featuredPost.slug}
                            primaryColor={featuredPost.primaryColor}
                            projectTitle={featuredPost.project.title}
                            datePublished={featuredPost.datePublished}
                            imageData={
                                featuredPost.hero.localFile.childImageSharp
                                    .fluid
                            }
                        />
                    </div>

                    {allPosts.map(post => {
                        const {
                            id,
                            title,
                            slug,
                            primaryColor,
                            project,
                            datePublished,
                            hero: {
                                localFile: {
                                    childImageSharp: { fluid }
                                }
                            }
                        } = post;
                        const projectTitle = project && project.title;

                        return (
                            <div key={id}>
                                <Post
                                    id={id}
                                    title={title}
                                    slug={slug}
                                    primaryColor={primaryColor}
                                    projectTitle={projectTitle}
                                    datePublished={datePublished}
                                    imageData={fluid}
                                />
                            </div>
                        );
                    })}
                </div>
            </section> */}
        </Layout>
    );
};

// datePublished(formatString: "dddd, MMMM Do YYYY")
export const pageQuery = graphql`
    query indexPage {
        site {
            ...SiteInformation
        }
        contentfulBlogPosts {
            ...BlogPosts
        }
        allContentfulEmployer(sort: { order: ASC, fields: createdAt }) {
            nodes {
                dateEnd
                dateStart
                id
                location
                name
                title
                website
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.object.isRequired
};

export default IndexPage;
