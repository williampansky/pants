/**
 * Module to embrace relative import resolves
 * and integrate Hugo-specific entities into Webpack.
 *
 * @namespace index
 * @version 0.1.0
 * @see [Fork]{@link https://github.com/vseventer/hugo-webpack-boilerplate}
 */

//-- Libs
import path from 'path';

//-- Packages
import CopyPlugin from 'copy-webpack-plugin';
import { sync as glob } from 'glob';
import InertEntryPlugin from 'inert-entry-webpack-plugin';
// import UnCSSPlugin from 'uncss-webpack-plugin';
import webpack from 'webpack';

//-- Config
import cssNano from './cssnano';
import htmlMinifier from './html-minifier';
import imagemin from './imagemin';

const PUBLIC_DIR = 'public/'; // Hugo `publishDir` default.
const PUBLISH_DIR = 'static/js/'; // Our publish default.

export const fromConfig = ({
    hugoPublishDir = PUBLIC_DIR,
    outDir = PUBLISH_DIR
}) => {
    //-- Ensure paths are absolute
    hugoPublishDir = path.resolve(hugoPublishDir);
    outDir = path.resolve(outDir);

    //-- Return configuration
    return {
        /**
         * The entry object is where webpack looks to start
         * building the bundle. The context is an absolute string
         * to the directory that contains the entry files.
         * @see https://webpack.js.org/configuration/entry-context/
         */
        context: hugoPublishDir,
        entry: () =>
            glob('*.html', {
                //-- Receive absolute paths for matched files.
                absolute: true,

                //-- The current working directory in which to search.
                cwd: hugoPublishDir,

                //-- Perform a basename-only match.
                matchBase: true,

                //-- Do not match directories, only files.
                nodir: true,

                //-- Do not sort the results.
                nosort: true
            }),

        /**
         * The top-level output key contains set of options
         * instructing webpack on how and where it should output
         * your bundles, assets and anything else you bundle
         * or load with webpack.
         * @see https://webpack.js.org/configuration/output/
         */
        output: {
            filename: 'app.min.js',
            path: outDir,
            publicPath: '/'
        },

        /**
         * webpack-dev-server can be used to quickly develop
         * an application. See the development guide to get started.
         * @see https://webpack.js.org/configuration/dev-server/
         */
        devServer: {
            contentBase: hugoPublishDir,
            inline: false,
            watchContentBase: true
        },

        /**
         * These options determine how the different
         * types of modules within a project will be treated.
         * @see https://webpack.js.org/configuration/module/
         */
        module: {
            rules: [
                {
                    test: /.html$/i,
                    use: [
                        'extricate-loader',
                        {
                            loader: 'html-loader',
                            options: Object.assign(
                                { interpolate: 'require' },
                                htmlMinifier
                            )
                        }
                    ]
                },
                {
                    test: /.(gif|jpe?g|png|svg|tiff|webp)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: { name: 'img/[name].[hash:4].[ext]' }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: Object.assign(
                                { bypassOnDebug: true },
                                imagemin
                            )
                        },
                        'sharp-image-loader'
                    ]
                },
                {
                    test: /.jsx?$/i,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'spawn-loader',
                            options: { name: 'js/[name].js' }
                        },
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [['es2015', { modules: false }]]
                            }
                        }
                    ]
                },
                {
                    test: /.(css|sass|scss)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: { name: 'css/[name].[hash:4].css' }
                        },
                        {
                            loader: 'extricate-loader',
                            options: { resolve: '\\.js$' }
                        },
                        {
                            loader: 'css-loader',
                            options: Object.assign({ sourceMap: true }, cssNano)
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    ctx: { spritePath: hugoPublishDir },
                                    path: __dirname
                                },
                                sourceMap: 'inline'
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: { outputStyle: 'nested', sourceMap: true }
                        }
                    ]
                }
            ]
        },

        /**
         * These options change how modules are resolved.
         * Webpack provides reasonable defaults, but it is
         * possible to change the resolving in detail.
         * Have a look at Module Resolution for more
         * explanation of how the resolver works.
         * @see https://webpack.js.org/configuration/resolve/
         */
        resolve: {
            modules: [
                hugoPublishDir,
                path.resolve('bower_components/'),
                path.resolve('node_modules/')
            ]
        },

        /**
         * The plugins option is used to customize the
         * webpack build process in a variety of ways.
         * Webpack comes with a variety built-in plugins.
         * @see https://webpack.js.org/configuration/plugins/
         */
        plugins: [
            new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
            new InertEntryPlugin(),
            // new UnCSSPlugin(),
            new CopyPlugin([{ from: '**/*' }], {
                ignore: [
                    // Ignore assets processed by loaders above.
                    '*.html',
                    '*.{gif,jpeg,jpg,png,svg,tiff,webp}',
                    '*.{js,jsx}',
                    '*.{css,sass,scss}'
                ]
            })
        ]
    };
};

//-- Export
export default fromConfig({});
