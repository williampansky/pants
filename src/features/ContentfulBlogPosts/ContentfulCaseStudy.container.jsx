import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from '@/components/BlogPost/BlogPost';

const ContentfulCaseStudy = ({ data, index }) => {
    const {
        datePublished,
        hero: {
            localFile: {
                childImageSharp: { fluid }
            }
        },
        id,
        internal: { type },
        leadParagraph,
        primaryColor,
        project,
        slug,
        title
    } = data;
    const summary = leadParagraph && leadParagraph.leadParagraph;
    const projectTitle = project && project.title;

    return (
        <div>
            <BlogPost
                datePublished={datePublished}
                id={id}
                imageData={fluid}
                index={index}
                leadParagraph={summary}
                postType={type}
                primaryColor={primaryColor}
                projectTitle={projectTitle}
                showImage={false}
                slug={slug}
                title={title}
                verticalOffset={index}
            />
        </div>
    );
};

ContentfulCaseStudy.propTypes = {};
ContentfulCaseStudy.defaultProps = {};

export default ContentfulCaseStudy;
