import React from 'react';
import PropTypes from 'prop-types';

import { StyledDatePublished } from '@/components/BlogPost/BlogPost.style';

const DatePublished = ({ date }) => (
    <StyledDatePublished>
        <span>{`Published on`}&nbsp;</span>
        <time>{date}</time>
    </StyledDatePublished>
);

DatePublished.propTypes = {
    date: PropTypes.string.isRequired
};

export default DatePublished;
