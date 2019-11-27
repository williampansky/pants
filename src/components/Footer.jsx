import React from 'react';

const Footer = ({ text }) => {
  return (
    <footer>
      <span>{new Date().getFullYear()}</span>
      <span>{text}</span>
    </footer>
  );
};
