/**
 * Site configuration options for a Gatsby site are placed in a file at
 * the root of the project folder called `gatsby-config.js`.
 *
 * @name gatsby-config
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */

/* eslint-disable camelcase */
const path = require(`path`);
require('regenerator-runtime/runtime');
require('dotenv').config({ path: `.env` });
// require('prismjs/themes/prism-dark.css');
// require('prismjs/plugins/line-numbers/prism-line-numbers.css');

module.exports = {
    siteMetadata: {
        title: `William Pansky`,
        description: `Front-end web developer and graphic designer with ability to solve complex website interface problems through creative and UX-minded solutions.`,
        author: `William Pansky`
    },
    plugins: [
        /**
         * Wrapper around the webpack feature for aliasing import statements.
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-alias-imports/
         */
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@': 'src'
                },
                extensions: ['js', 'jsx']
            }
        },

        /**
         * Source plugin for pulling content types, entries, and assets into
         * Gatsby from [Contentful] spaces. It creates links between entry types
         * and asset so they can be queried in Gatsby using GraphQL.
         *
         * [Contentful]: https://www.contentful.com/
         * @see https://www.gatsbyjs.org/packages/gatsby-source-contentful/
         */
        {
            resolve: `gatsby-source-contentful`,
            options: {
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true,
                environment: 'master',
                forceFullSync: false,
                // host: `preview.contentful.com`,
                localeFilter: locale => locale.code === 'en-US',
                spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID
            }
        },

        /**
         * The web app manifest _(part of the PWA specification)_ enabled by this
         * plugin allows users to add your site to their home screen on most
         * mobile browsers — see [here]. The manifest provides configuration
         * and icons to the phone.
         *
         * This plugin provides several features beyond manifest configuration
         * to make your life easier, they are:
         *
         * - **Auto icon generation** - generates icon sizes from a single source
         * - **Favicon support**
         * - **Legacy icon support (iOS)**
         * - **Cache busting**
         * - **Localization** - Provides unique manifests [(Example)]
         *
         * [here]: https://caniuse.com/#feat=web-app-manifest
         * [Example]: https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-manifest
         */
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },

        /**
         * Adds drop-in support for making a Gatsby site work offline and more
         * resistant to bad network connections. It creates a service worker for
         * the site and loads the service worker into the client.
         *
         * If you’re using this with `gatsby-plugin-manifest` _(recommended)_
         * this plugin should be listed after that plugin so the manifest file can
         * be included in the service worker.
         *
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-offline
         */
        'gatsby-plugin-offline',

        /**
         * A Gatsby plugin to download and prefetch Google Fonts. Can
         * increase performance as opposed to loading webfonts from Google’s
         * external stylesheet.
         *
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-google-fonts
         */
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                display: 'swap',
                fonts: [`Open Sans Condensed:300,700`]
            }
        },

        /**
         * Automatically generates a _headers file & a _redirects file at the root
         * of the public folder to configure HTTP headers & redirects on Netlify.
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-netlify
         */
        `gatsby-plugin-netlify`,

        /**
         * Gatsby plugin to handle PostCSS.
         *
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-postcss
         */
        `gatsby-plugin-postcss`,

        /**
         * Provides drop-in support for server rendering data
         * added with [React-Helmet].
         *
         * React Helmet is a component which lets you control your document
         * head using their React component.
         *
         * With this plugin, attributes you add in their component,
         * e.g. `title`, `meta` attributes, etc. will get added to the static
         * HTML pages Gatsby builds.
         *
         * This is important not just for site viewers, but also for SEO — `title`
         * and `description` metadata stored in the document head is a key
         * component used by Google in determining placement in search results.
         *
         * [React-Helmet]: https://github.com/nfl/react-helmet
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet
         */
        'gatsby-plugin-react-helmet',

        /**
         * Create `robots.txt` for your Gatsby site.
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt
         */
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://ux.credera.com/'
            }
        },

        /**
         * Provides drop-in support for SASS/SCSS stylesheets
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-sass
         */
        'gatsby-plugin-sass',

        /**
         * Aims to provide excellent out-of-the box settings
         * for processing common web image formats.
         *
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-sharp
         */
        `gatsby-plugin-sharp`,

        /**
         * Adds syntax highlighting to code blocks
         * in markdown files using [PrismJS].
         *
         * [PrismJS]: https://prismjs.com/
         * @see https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
         */
        {
            resolve: `gatsby-remark-prismjs`,
            options: {
                // Class prefix for <pre> tags containing syntax highlighting;
                // defaults to 'language-' (eg <pre class="language-js">).
                // If your site loads Prism into the browser at runtime,
                // (eg for use with libraries like react-live),
                // you may use this to prevent Prism from re-processing syntax.
                // This is an uncommon use-case though;
                // If you're unsure, it's best to use the default value.
                classPrefix: 'language-',
                // This is used to allow setting a language for inline code
                // (i.e. single backticks) by creating a separator.
                // This separator is a string and will do no white-space
                // stripping.
                // A suggested value for English speakers is the non-ascii
                // character '›'.
                inlineCodeMarker: null,
                // This lets you set up language aliases.  For example,
                // setting this to '{ sh: "bash" }' will let you use
                // the language "sh" which will highlight using the
                // bash highlighter.
                aliases: {},
                // This toggles the display of line numbers globally alongside the code.
                // To use it, add the following line in src/layouts/index.js
                // right after importing the prism color scheme:
                //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                // Defaults to false.
                // If you wish to only show line numbers on certain code blocks,
                // leave false and use the {numberLines: true} syntax below
                showLineNumbers: false,
                // If setting this to true, the parser won't handle and highlight inline
                // code used in markdown i.e. single backtick code like `this`.
                noInlineHighlight: false,
                // This adds a new language definition to Prism or extend an already
                // existing language definition. More details on this option can be
                // found under the header "Add new language definition or extend an
                // existing language" below.
                languageExtensions: [
                    {
                        language: 'superscript',
                        extend: 'javascript',
                        definition: {
                            superscript_types: /(SuperType)/
                        },
                        insertBefore: {
                            function: {
                                superscript_keywords: /(superif|superelse)/
                            }
                        }
                    }
                ]
            }
        },

        /**
         * A Gatsby source plugin for sourcing data into your
         * Gatsby application from your local filesystem.
         *
         * @see https://www.gatsbyjs.org/packages/gatsby-plugin-filesystem
         */
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`)
            }
        },

        /**
         * Parses Markdown files using [Remark].
         *
         * [Remark]: https://remark.js.org/
         * @see https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
         */
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [`gatsby-remark-prismjs`]
            }
        },

        /**
         * Creates `ImageSharp` nodes from image types that are supported by
         * the [Sharp] image processing library and provides fields in their
         * GraphQL types for processing your images in a variety of ways
         * including resizing, cropping, and creating responsive images.
         *
         * [Sharp]: https://github.com/lovell/sharp
         * @see https://www.gatsbyjs.org/packages/gatsby-transformer-sharp
         */
        `gatsby-transformer-sharp`
    ]
};
