import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Name({ font }) {
    const { headlineFamily, headlineWeight } = font;
    return (
        <Component family={headlineFamily} weight={headlineWeight}>
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

Name.propTypes = {
    font: PropTypes.shape({
        headlineFamily: PropTypes.string,
        headlineWeight: PropTypes.number
    }).isRequired
};

// prettier-ignore
const Component = styled.h1`
    color: inherit;
    font-family: ${props => props.family ? props.family : 'inherit'};
    font-weight: ${props => (props.weight ? props.weight : 'normal')};
    line-height: 1;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  
    font-size: 4em;
    @media (min-width: 960px)  { font-size: 6em; }
    @media (min-width: 1200px) { font-size: 8em; }
    @media (min-width: 1600px) { font-size: 12em; }
    @media (min-width: 2560px) { font-size: 20em; }

    position: relative;
    @media (min-width: 960px) { left: -4px; top: -20px; }
    @media (min-width: 1200px) { top: -25px; }
    @media (min-width: 1600px) { top: -40px; }
    @media (min-width: 2560px) { top: -65px; }
    
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
    /* animation: tracking-in-expand 700ms 800ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both; */
    .i1 { left: -1px; }
    .l1 { left: -7px; }
    .l2 { left: -9px; }
    .i2 { left: -12px; }
    .a  { left: -14px; }
    .m  { left: -14px; }

    @media (min-width: 768px) {
        .i1 { left: -2px; }
        .l1 { left: -9px; }
        .l2 { left: -10px; }
        .i2 { left: -14px; }
        .a  { left: -15px; }
        .m  { left: -14px; }
    }

    @media (min-width: 1200px) {
        .i1 { left: -4px; }
        .l1 { left: -14px; }
        .l2 { left: -16px; }
        .i2 { left: -20px; }
        .a  { left: -21px; }
        .m  { left: -20px; }
    }

    @media (min-width: 1600px) {
        .i1 { left: -8px; }
        .l1 { left: -28px; }
        .l2 { left: -34px; }
        .i2 { left: -46px; }
        .a  { left: -56px; }
        .m  { left: -60px; }
    }

    @media (min-width: 2560px) {
        .i1 { left: -18px; }
        .l1 { left: -52px; }
        .l2 { left: -64px; }
        .i2 { left: -86px; }
        .a  { left: -98px; }
        .m  { left: -100px; }
    }
`;

// prettier-ignore
const LastName = styled.div`
    /* animation: tracking-in-expand 700ms 1200ms cubic-bezier(0.215, 0.610, 0.355, 1.000) both; */
    top: -15px;
    left: 5px;
    .a  { left: -4px; }
    .n  { left: -4px; }
    .s  { left: -5px; }
    .k  { left: -6px; }
    .y  { left: -2px; }

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
        .a  { left: -8px; }
        .n  { left: -8px; }
        .s  { left: -10px; }
        .k  { left: -12px; }
        .y  { left: -6px; }
    }

    @media (min-width: 1200px) {
        top: -36px;
        left: 12px;
        .a  { left: -10px; }
        .n  { left: -10px; }
        .s  { left: -12px; }
        .k  { left: -14px; }
        .y  { left: -8px; }
    }

    @media (min-width: 1600px) {
        top: -56px;
        left: 18px;
        .p  { left: -1px; }
        .a  { left: -20px; }
        .n  { left: -22px; }
        .s  { left: -30px; }
        .k  { left: -36px; }
        .y  { left: -25px; }
    }

    @media (min-width: 2560px) {
        top: -98px;
        left: 30px;
        .p  { left: -1px; }
        .a  { left: -30px; }
        .n  { left: -32px; }
        .s  { left: -44px; }
        .k  { left: -56px; }
        .y  { left: -40px; }
    }
`;
