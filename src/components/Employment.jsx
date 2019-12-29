import React from 'react';
import styled from 'styled-components';

export default function Employment() {
    return (
        <Component>
            <h2>
                Frontend Developer, <strong>Credera</strong>
            </h2>
            <Location>Dallas/Fort Worth Area</Location>
            <Timeline>May 2019 - Present</Timeline>
        </Component>
    );
}

const Component = styled.div`
    font-size: 1em;
    line-height: 1;
    margin: 0;
    padding: 0;

    h2 {
        color: inherit;
        font-weight: normal;
        line-height: 1;
        margin: 0 0 0.25em;
        padding: 0;
    }
`;

const Location = styled.div`
    margin: 0 0 0.15em;
`;

const Timeline = styled.div`
    font-size: 0.765em;
    line-height: 1;
`;
