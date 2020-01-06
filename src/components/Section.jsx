import React from 'react';
import PropTypes from 'prop-types';

const Section = ({
    id,
    backgroundColor,
    container,
    containerSize,
    sectionSize,
    children
}) => (
    <section
        className={[
            'uk-section',
            sectionSize ? `uk-section-${sectionSize}` : '',
            backgroundColor ? `uk-background-${backgroundColor}` : ''
        ].join(' ')}
        id={id}
    >
        {container ? (
            <div
                className={[
                    'uk-container',
                    containerSize ? `uk-container-${containerSize}` : ''
                ].join(' ')}
            >
                {children}
            </div>
        ) : (
            children
        )}
    </section>
);

export default Section;
