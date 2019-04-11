'use strict';

// Load plugins
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const child = require('child_process');
const cssnano = require('cssnano');
const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackStream = require('webpack-stream');

const config = {
    dir: {
        base: './',
        src: {
            base: './themes/2019AndBeyond/src',
            css: './themes/2019AndBeyond/src/css',
            js: './themes/2019AndBeyond/src/js'
        },
        static: {
            base: './themes/2019AndBeyond/static',
            css: './themes/2019AndBeyond/static/css',
            js: './themes/2019AndBeyond/static/js'
        }
    }
}

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: config.dir.base
        },
        port: 3000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Clean assets
function clean() {
    return del([
        config.dir.static.css,
        config.dir.static.js
    ]);
}

// Optimize Images
// function images() {
//     return gulp
//         .src('./assets/img/**/*')
//         .pipe(newer('./_site/assets/img'))
//         .pipe(
//             imagemin([
//                 imagemin.gifsicle({ interlaced: true }),
//                 imagemin.jpegtran({ progressive: true }),
//                 imagemin.optipng({ optimizationLevel: 5 }),
//                 imagemin.svgo({
//                     plugins: [
//                         {
//                             removeViewBox: false,
//                             collapseGroups: true
//                         }
//                     ]
//                 })
//             ])
//         )
//         .pipe(gulp.dest('./_site/assets/img'));
// }

// CSS task
function css() {
    return gulp
        .src(config.dir.src.css + '**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dir.static.base), {
            sourcemaps: true
        })
        .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
    return gulp
        .src([config.dir.src.js + '/**/*', './gulpfile.js'])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
    return (
        gulp
            .src([config.dir.src.js + '/**/*'])
            .pipe(plumber())
            .pipe(webpackStream(webpackConfig, webpack))
            // folder only, filename is specified in webpack config
            .pipe(gulp.dest(config.dir.static.js))
            .pipe(browsersync.stream())
    );
}

// Hugo
function hugo() {
    return child.spawn('hugo', ['server'], {
        stdio: 'inherit'
    });
}

// Watch files
function watchFiles() {
    gulp.watch(config.dir.src.css, css);
    gulp.watch(config.dir.src.js, gulp.series(/*scriptsLint,*/ scripts));
    gulp.watch(
        [
            './_includes/**/*',
            './_layouts/**/*',
            './_pages/**/*',
            './_posts/**/*',
            './_projects/**/*'
        ],
        gulp.series(hugo, browserSyncReload)
    );
    // gulp.watch('./assets/img/**/*', images);
}

// define complex tasks
const js = gulp.series(/*scriptsLint,*/ scripts);
const watch = gulp.parallel(watchFiles, /*browserSync*/);
const build = gulp.series(clean, gulp.parallel(css, /*images,*/ hugo, js, watch));

// export tasks
// exports.images = images;
exports.css = css;
exports.js = js;
exports.hugo = hugo;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
