import React from 'react';
import PropTypes from 'prop-types';

const TextMeta = ({ children, text }) =>
    children ? (
        <div className="uk-text-meta">{children}</div>
    ) : (
        <p className="uk-text-meta">{text}</p>
    );

TextMeta.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string
};

TextMeta.defaultProps = {
    children: null,
    text: 'TEXT HERE'
};

export default TextMeta;
