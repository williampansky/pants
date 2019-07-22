import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '@/components/Image';

const Container = styled.article`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

const ImageWrapper = styled.div`
    border-radius: 50%;
    display: block;
    width: 70px;
    overflow: hidden;
`;

const ClientName = styled.h1`
    color: rgba(0, 0, 0, 0.9265);
    font-size: inherit;
    margin: 0;
    padding: 0;
`;

const Description = styled.p`
    color: #757575;
    line-height: inherit;
    margin: 0;
`;

const InfoWrapper = styled.header`
    padding-left: 15px;
    
    ${ClientName},
    ${Description} {
        font-family: sans-serif;
        font-size: 0.75em;
        font-weight: normal;
        letter-spacing: 0.065px;
        line-height: 1.4;
    }
`;

const PostClient = ({
    client: { name, website, description, logo, avatar }
}) => (
    <Container>
        <ImageWrapper>
            <Image src={avatar.childImageSharp.fluid} alt={name} />
        </ImageWrapper>
        <InfoWrapper>
            <ClientName>{name}</ClientName>
            <Description>{description}</Description>
        </InfoWrapper>
    </Container>
);

PostClient.propTypes = {
    client: PropTypes.object.isRequired
};

export default PostClient;