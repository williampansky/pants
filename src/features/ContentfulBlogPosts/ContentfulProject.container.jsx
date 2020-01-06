import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from '@/components/BlogPost/BlogPost';

const ContentfulProject = ({ data, index }) => {
    const {
        id,
        internal: { type },
        leadParagraph,
        primaryColor,
        project,
        slug,
        title,
        website
    } = data;
    const summary = leadParagraph && leadParagraph.leadParagraph;
    const projectTitle = project && project.title;

    return (
        <div>
            <BlogPost
                id={id}
                index={index}
                leadParagraph={summary}
                postType={type}
                primaryColor={primaryColor}
                projectTitle={projectTitle}
                showImage={false}
                slug={slug}
                title={title}
                verticalOffset={index}
                website={website}
            />
        </div>
    );
};

ContentfulProject.propTypes = {};
ContentfulProject.defaultProps = {};

export default ContentfulProject;
