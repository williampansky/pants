import React from 'react';
import styled from 'styled-components';

export default function Employment({
    dateEnd,
    dateStart,
    id,
    location,
    name,
    title,
    website
}) {
    return (
        <Component className="uk-card uk-card-body uk-light" id={id}>
            <Title>{title}</Title>
            <Company>{name}</Company>
            <Timeline>{`${dateStart}—${dateEnd}`}</Timeline>
            <Location>{location}</Location>
            <meta content={website} name="website" />
        </Component>
    );
}

const Component = styled.article`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    font-size: 16px;
    line-height: 1;
    margin: 0;
`;

const Title = styled.h1`
    color: inherit;
    font-size: 1em;
    font-weight: bold;
    line-height: 1;
    margin: 0 0 0.25em;
    padding: 0;
`;

const Company = styled.p`
    margin: 0 0 0.275em;
`;

const Timeline = styled.p`
    font-size: 0.765em;
    margin: 0 0 0.15em;
`;

const Location = styled.p`
    font-size: 0.765em;
    margin: 0;
`;
