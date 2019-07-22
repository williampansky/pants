import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    box-sizing: border-box;
`;

const CategoryAndProject = styled.div`
    font-family: sans-serif;
    font-size: 1.5em;
    font-weight: 300;
    line-height: 1.3454;
    letter-spacing: -0.865px;
    margin: 0 0 0.5em;
`;

const DateTime = styled.p`
    font-size: 0.75em;
    letter-spacing: 0.065px;
    line-height: 1.4;
    margin: 0 0 0.5em;
`;

const ReadingTimeWrapper = styled.p`
    font-size: 0.75em;
    letter-spacing: 0.065px;
    line-height: 1.4;
    margin: 0 0 0.5em;
`;

const PostMeta = ({
    category,
    project,
    datePublished,
    dateModified,
    timeToRead,
    wordCount
}) => {
    const handleCategoryName = string => {
        switch (string) {
            case 'ContentfulCaseStudy':
                string = 'Case Study';
                break;
        
            default:
                string = '';
                break;
        }

        return string;
    };

    return (
        <Container>
            <CategoryAndProject>
                <span>{handleCategoryName(category)}</span>
                <span> / </span>
                <span>{project}</span>
            </CategoryAndProject>
            <DateTime>
                <span>Published on </span>
                <time>{datePublished}</time>.<span>Last modified on </span>
                <time>{dateModified}</time>.
            </DateTime>
            <ReadingTimeWrapper>
                <strong>
                    <time>{timeToRead}</time>
                    <span> minute read. </span>
                </strong>
                <span>{wordCount} words.</span>.
            </ReadingTimeWrapper>
        </Container>
    );
};

PostMeta.propTypes = {
    category: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
    dateModified: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    wordCount: PropTypes.number.isRequired
};

export default PostMeta;
