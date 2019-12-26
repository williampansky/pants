import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, rel, target, text }) => {
  return (
    <Component href={href} rel={rel} target={target}>
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

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string.isRequired
};

ExternalLink.defaultProps = {
  rel: 'noopener noreferrer',
  target: '_blank'
};

export default ExternalLink;
