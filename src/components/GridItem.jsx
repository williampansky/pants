import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '@/colors.json';

const GridItem = ({ children, padding, text }) => {
    const [bgColor, setBgColor] = useState(null);
    const [textColor, setTextColor] = useState(null);

    const getRandomColorCombo = useCallback((array = COLORS) => {
        const selection = Math.floor(Math.random() * array.length);
        const { background, foreground } = array[selection];
        const invert = Math.random() >= 0.5;

        if (invert) {
            setBgColor(foreground);
            setTextColor(background);
        } else {
            setBgColor(background);
            setTextColor(foreground);
        }
    }, []);

    useEffect(() => {
        getRandomColorCombo();
    }, [getRandomColorCombo]);

    return (
        <Component
            bg={bgColor ? bgColor : 'black'}
            padding={padding}
            txt={textColor ? textColor : 'white'}
        >
            {children ? children : text}
        </Component>
    );
};

const Component = styled.section`
    animation: scale-up-center 600ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
    background-color: ${props => props.bg};
    color: ${props => props.txt};
    box-sizing: border-box;
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    padding: ${props => (props.padding ? '1em' : 0)};
    position: relative;
`;

GridItem.defaultProps = {
    padding: true
};

export default GridItem;
