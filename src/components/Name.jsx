import React from 'react';
import styled from 'styled-components';

export default function Name({ font }) {
  return (
    <Component font={font}>
      <FirstName>
        <span className="w">W</span>
        <span className="i1">i</span>
        <span className="l1">l</span>
        <span className="l2">l</span>
        <span className="i2">i</span>
        <span className="a">a</span>
        <span className="m">m</span>
      </FirstName>
      <LastName>
        <span className="p">P</span>
        <span className="a">a</span>
        <span className="n">n</span>
        <span className="s">s</span>
        <span className="k">k</span>
        <span className="y">y</span>
      </LastName>
    </Component>
  );
}

// prettier-ignore
const Component = styled.h1`
  font-family: ${props =>
    props.font ? props.font.headlineFamily : 'inherit'};
  font-weight: ${props => (props.font ? props.font.headlineWeight : 'normal')};
  line-height: 1;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  
  font-size: 1em;
  @media (min-width: 460px)  { font-size: 2em; }
  @media (min-width: 768px)  { font-size: 4em; }
  @media (min-width: 960px)  { font-size: 6em; }
  @media (min-width: 1200px) { font-size: 8em; }
  @media (min-width: 1600px) { font-size: 12em; }
  @media (min-width: 2560px) { font-size: 20em; }
  
  div {
    display: block;
    position: relative;
  }

  span {
    display: inline-block;
    position: relative;
  }
`;

// prettier-ignore
const FirstName = styled.div`
  @media (min-width: 768px) {
    .i1 { left: -2px; }
    .l1 { left: -9px; }
    .l2 { left: -10px; }
    .i2 { left: -14px; }
    .a  { left: -15px; }
    .m  { left: -14px; }
  }
`;

// prettier-ignore
const LastName = styled.div`
  @media (min-width: 768px) {
    top: -20px;
    left: 5px;
    .a  { left: -4px; }
    .n  { left: -3px; }
    .s  { left: -4px; }
    .k  { left: -4px; }
    .y  { left: 7px; }
  }

  @media (min-width: 960px) {
    top: -28px;
    left: 8px;
  }

  @media (min-width: 1200px) {
    top: -36px;
    left: 12px;
  }

  @media (min-width: 1600px) {
    top: -56px;
    left: 18px;
  }

  @media (min-width: 2560px) {
    top: -98px;
    left: 30px;
  }
`;
