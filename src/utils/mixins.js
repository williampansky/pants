/**
 * Styled-components equivalent of Sass shrink-bounce
 */
export const animationShrinkBounce = (options = '300ms ease') => {
  return `
    @keyframes shrinkBounce {
      0% { transform: scale(0); }
      5% { display: inline-block; }
      33% { transform: scale(1.5); }
      100% { transform: scale(1); }
    }

    animation: shrinkBounce ${options};
  `;
};

/**
 * Styled-components equivalent of Sass animation-swipe
 */
export const animationSwipe = () => {
  return `
    @keyframes placeHolderSwipe {
      from { background-position: -600px 0; }
      to { background-position: 600px 0; }
    }

    animation: placeHolderSwipe 1s infinite linear forwards;
    background-color: #f6f6f6;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        to right,
        #f3f3f3 0%,
        #f0f0f0 20%,
        #eeeeee 40%,
        #f8f8f8 100%
    );
  `;
};

/**
 * Styled-components equivalent of Sass display-flex
 */
export const displayFlex = (
  flexFlow = null,
  alignItems = null,
  justifyContent = null
) => {
  return `
    display: flex;
    ${flexFlow ? `flex-flow: ${flexFlow}` : ''};
    ${alignItems ? `align-items: ${alignItems}` : ''};
    ${justifyContent ? `justify-content: ${justifyContent}` : ''};
  `;
};

/**
 * Styled-components equivalent of Sass position-absolute
 */
export const positionAbsolute = (
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto',
  zIndex = 'auto'
) => {
  return `
    position: absolute;
    top:      ${top};
    right:    ${right};
    bottom:   ${bottom};
    left:     ${left};
    z-index:  ${zIndex};
  `;
};

/**
 * Styled-components equivalent of Sass position-fixed
 */
export const positionFixed = (
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto',
  zIndex = 'auto'
) => {
  return `
    position: fixed;
    top:      ${top};
    right:    ${right};
    bottom:   ${bottom};
    left:     ${left};
    z-index:  ${zIndex};
  `;
};

/**
 * Styled-components equivalent of Sass text-shadow
 */
export const textShadow = type => {
  let shadowValues = '0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);';

  if (type === 'small')
    shadowValues =
      '0.5px 0 0.5px rgba(0, 0, 0, 0.1), 0.5px 0.5px 0 rgba(0, 0, 0, 0.15);';

  if (type === 'harsh')
    shadowValues =
      '0.5px 0 0.5px rgba(0, 0, 0, 0.45), 0.5px 0.5px 0 rgba(0, 0, 0, 0.45);';

  return `text-shadow: ${shadowValues}`;
};
