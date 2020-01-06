import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

export default function Post({
    id,
    imageData,
    title,
    slug,
    primaryColor,
    datePublished,
    projectTitle
}) {
    return (
        <Component
            // backgroundColor={primaryColor}
            id={id}
        >
            <Column>
                <ImageContainer className="uk-visible@m">
                    {typeof imageData === 'object' && (
                        <BackgroundImage
                            backgroundColor={`#040e18`}
                            className="uk-height-1-1 uk-width-1-1"
                            fluid={imageData}
                        />
                    )}
                </ImageContainer>
            </Column>
            <Column className="uk-width-expand">
                <Row>
                    <div className="uk-card uk-card-body uk-card-small">
                        <Title>{title}</Title>
                        <DatePublished>
                            <span>
                                Published on <time>{datePublished}</time>
                            </span>
                        </DatePublished>
                    </div>
                </Row>
            </Column>
        </Component>
    );
}

const Component = styled.article`
    background: ${props => props.backgroundColor};
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 18px;
    line-height: 1;
    margin: 0;
`;

const Column = styled.div``;

const Row = styled.div``;

const ImageContainer = styled.div`
    height: 100px;
    width: 150px;
`;

const Title = styled.h1`
    color: inherit;
    font-size: 1em;
    font-weight: normal;
    line-height: 1.165;
    margin: 0 0 0.25em;
    padding: 0;
`;

const DatePublished = styled.p`
    color: inherit;
    font-size: 0.765em;
    font-weight: normal;
    line-height: 1;
    margin: 0 0 0.65em;
    padding: 0;
`;
