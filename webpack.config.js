/**
 * @namespace webpack
 * @version 0.1.0
 */

// -- libs
const path = require('path');
const webpack = require('webpack');

// -- packages

// -- configs
const theme = '2019AndBeyond';
const config = {
    dir: {
        themes: './themes',
        entry: './themes/' + theme + '/src',
        output: './themes/' + theme + '/static'
    },
    filename: {
        css: 'app.min.css',
        js: 'app.bundle.js'
    }
};

module.exports = {
    entry: [
        // config.dir.entry + '/css/main.scss',
        config.dir.entry + '/index.js'
    ],
    watch: true,
    mode: 'development',
    devtool: 'source-map',
    module: {
        // rules: [
        //     {
        //         test: /\.css$/,
        //         exclude: /node_modules/,
        //         use: [
        //             'style-loader',
        //             {
        //                 loader: 'css-loader',
        //                 options: {
        //                     importLoaders: 1,
        //                     sourceMap: true
        //                 }
        //             },
        //             'postcss-loader'
        //         ]
        //     },
        //     {
        //         test: /\.scss$/,
        //         exclude: /node_modules/,
        //         use: [
        //             {
        //                 loader: 'file-loader',
        //                 options: {
        //                     name: '[name].css',
        //                     outputPath: '../css'
        //                 }
        //             },
        //             {
        //                 loader: 'sass-loader',
        //                 options: {
        //                     outputStyle: 'compressed',
        //                     sourceMap: true
        //                 }
        //             }
        //         ]
        //     }
        // ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './themes/2019AndBeyond/static/js')
    }
};
