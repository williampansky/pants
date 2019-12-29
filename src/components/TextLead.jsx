import React from 'react';
import styled from 'styled-components';

const TextLead = ({ text }) => {
    return <Component>{text}</Component>;
};

const Component = styled.p`
    animation: text-focus-in 900ms cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 300;
    margin: 0;
    padding: 0;

    @media (min-width: 460px) {
        font-size: 1.2em;
    }

    @media (min-width: 768px) {
        font-size: 1.5em;
    }

    @media (min-width: 1200px) {
        font-size: 1.65em;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-start;
    }
`;

export default TextLead;
