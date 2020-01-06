/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import './node_modules/normalize.css/normalize.css';
import './node_modules/uikit/dist/css/uikit.min.css';
import '@/styles/main.scss';

/**
 * IntersectionObserver polyfill for Safari and/or Internet Explorer support
 * per the gatsby-background-image library's direction.
 * @see https://github.com/timhagn/gatsby-background-image/tree/master/packages/gatsby-background-image#important
 */
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
        import(`intersection-observer`);
        // eslint-disable-next-line no-console
        console.log(`# IntersectionObserver is polyfilled!`);
    }
};
