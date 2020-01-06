import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { parseContentfulContentType } from '@/utils/contentful';

import { StyledDatePublished } from '@/components/BlogPost/BlogPost.style';
import DatePublished from '@/components/BlogPost/elements/DatePublished.BlogPost';

import {
    Component,
    Column,
    Row,
    ImageContainer,
    Title,
    StyledPostContentType,
    StyledPostMeta
} from '@/components/BlogPost/BlogPost.style';

const BlogPost = ({
    id,
    index,
    imageData,
    title,
    slug,
    leadParagraph,
    primaryColor,
    datePublished,
    projectTitle,
    postType,
    showImage,
    description,
    verticalOffset,
    website
}) => (
    <Component
        // backgroundColor={primaryColor}
        id={id}
        index={index}
        style={{ top: `-${verticalOffset}px` }}
    >
        <Link to={`/posts/${slug}`}>
            <Row className="uk-card uk-card-body uk-card-small">
                {showImage && (
                    <Column>
                        <ImageContainer className="uk-visible@m">
                            <BackgroundImage
                                backgroundColor={`#040e18`}
                                className="uk-height-1-1 uk-width-1-1"
                                fluid={imageData}
                            />
                        </ImageContainer>
                    </Column>
                )}
                <Column className="uk-width-expand uk-height-1-1">
                    <Row className="uk-height-1-1">
                        <div className="uk-height-1-1">
                            <Title>{title}</Title>
                            <StyledPostMeta>
                                <StyledPostContentType>
                                    {parseContentfulContentType(postType)}
                                </StyledPostContentType>
                                {datePublished && (
                                    <DatePublished date={datePublished} />
                                )}
                                {website && (
                                    <StyledDatePublished>
                                        {website}
                                    </StyledDatePublished>
                                )}
                            </StyledPostMeta>
                        </div>
                    </Row>
                </Column>
            </Row>
        </Link>
    </Component>
);

BlogPost.propTypes = {
    id: PropTypes.string.isRequired
};

export default BlogPost;
