import React from 'react';
import styled from 'styled-components';

const ExternalLink = ({ href, text }) => {
  return (
    <Component href={href} rel="noopener noreferrer" target="_blank">
      {text}
    </Component>
  );
};

const Component = styled.a`
  align-items: flex-start;
  box-sizing: border-box;
  color: inherit;
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.765em;
  height: 100%;
  justify-content: flex-start;
  padding: 1em;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export default ExternalLink;
