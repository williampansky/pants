import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '@/colors.json';

const Card = ({ children, padding, text }) => {
    return (
        <div className="uk-card uk-card-default uk-card-body">
            {children ? children : text}
        </div>
    );
};

Card.defaultProps = {
    padding: true
};

export default Card;
