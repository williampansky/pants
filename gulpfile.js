// Gulp
// http://gulpjs.com/
// npm install gulp
// npm install --only=dev
var gulp = require('gulp');

// Gulp Util
// https://www.npmjs.com/package/gulp-util
// npm install gulp-util
var gutil = require('gulp-util');

// Babel
// https://www.npmjs.com/package/gulp-babel
// npm install gulp-babel --save-dev babel-preset-es2015
const babel = require('gulp-babel');

// Babel - Babili
// https://www.npmjs.com/package/gulp-babili
// npm install gulp-babili --save-dev
const babili = require("gulp-babili");

// Concat Scripts
// https://www.npmjs.com/package/gulp-concat
// npm install --save-dev gulp-concat
var concat = require('gulp-concat');

// Gulp Rename
// https://www.npmjs.com/package/gulp-rename
// npm install gulp-rename --save-dev
var rename = require("gulp-rename");

// Sass
// https://www.npmjs.com/package/gulp-sass
// npm install gulp-sass --save-dev
var sass = require('gulp-sass');

// PostCSS
// https://www.npmjs.com/package/gulp-postcss
// npm install gulp-postcss --save-dev
var postcss = require('gulp-postcss');

// Stylelint
// https://www.npmjs.com/package/gulp-stylelint
// https://stylelint.io/user-guide/
// npm install gulp-stylelint --save-dev
// Stylelint — Standard Config
// https://www.npmjs.com/package/stylelint-config-standard
// npm install stylelint-config-standard --save-dev
const gulpStylelint = require('gulp-stylelint');

// CSSnano
// https://www.npmjs.com/package/gulp-cssnano
// npm install gulp-cssnano --save-dev
var nano = require('gulp-cssnano');

// Source Maps
// npm install gulp-sourcemaps --save-dev
// https://www.npmjs.com/package/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// Autoprefixer
// https://www.npmjs.com/package/gulp-autoprefixer
// npm install gulp-autoprefixer --save-dev
var autoprefixer = require('autoprefixer');

// Gulp Vinyl FTP
// https://www.npmjs.com/package/vinyl-ftp
// http://loige.co/gulp-and-ftp-update-a-website-on-the-fly/
// npm install --save-dev vinyl-ftp
// var ftp = require( 'vinyl-ftp' );

// -----------------------------------------
// ## RUN CMD 'gulp' TO COMPILE SCSS
gulp.task('default', () => {
  return gulp.src('themes/pFlipboard/static/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // using gulp-sass
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'verbose', console: true
        }
      ]
    }))
    .pipe(nano())
    .pipe(rename('pants.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('themes/pFlipboard/static/css'))
});

// -----------------------------------------
// ## WATCH SCSS, COMPILE AND MINIFY ON SAVE
gulp.task('watch', () => {
  gulp.watch('themes/pFlipboard/static/scss/**/*.scss', ['default']);
  // gulp.watch('themes/pFlipboard/static/babel/*.js', ['concat']);
});

// -----------------------------------------
// ## RUN CMD 'gulp deploy' TO DEPLOY TO FTP
// Guide: discourse.roots.io/t/deploy-to-production-server-on-shared-hosting-with-gulp-with-ftp/4435
gulp.task('deploy', function() {
  var conn = ftp.create( {
    host:     'hostname',
    user:     'username',
    password: 'password',
    parallel: 10,
    log:      gutil.log
  });

  // Match files using the patterns the shell uses, like stars and stuff.
  // https://github.com/isaacs/node-glob
  var globs = [
    'static/css/*.css',
    'static/css/*.map',
    'static/js/*.js',
    '!*',
    '!*.php',
    '!dist/**',
    '!lang/**',
    '!templates/*.php',
    '!lib/*.php',
    '!.git',
    '!*.json',
    '!*.md',
    '!*.xml',
    '!assets',
    '!bower_components',
    '!dist/scripts/jquery.js',
    '!dist/scripts/jquery.js.map',
    '!dist/scripts/main.js',
    '!dist/scripts/main.js.map',
    '!dist/scripts/modernizr.js',
    '!dist/scripts/modernizr.js.map',
    '!dist/styles/editor-style.css',
    '!dist/styles/editor-style.css.map',
    '!dist/styles/main.css',
    '!dist/styles/main.css.map',
    '!gulpfile.js',
    '!node_modules',
    '!node_modules/**',
  ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance
  return gulp.src( globs, { base: '.', buffer: false } )
    // .pipe( conn.newer( '/public_html/wp-content/themes/IllusiveApparel/assets/css' ) ) // only upload newer files
    .pipe( conn.dest( '' ) );
});

// -----------------------------------------
// ## RUN CMD 'gulp babel'
// TO BABEL & CONCATENATE JAVASCRIPT FILES
gulp.task('babel', () => {
  var src = 'themes/pFlipboard/static/babel/';
  return gulp.src([
      src + 'bar.js',
      src + 'accordions.js',
      src + 'util-deepFocus.js',
      src + 'lightbox.js',
      src + 'readingProgress.js',
      src + 'pageLoad.js'
      // src + 'slideoutInit.js'
    ])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(concat('all.js'))
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('themes/pFlipboard/static/js'));
});

// -----------------------------------------
// ## RUN CMD 'gulp vue'
// TO BABEL & CONCATENATE VUE JS FILES
gulp.task('vue', () => {
  var src = 'themes/pFlipboard/static/babel/';
  return gulp.src([
      src + 'vue-pens.js'
    ])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(concat('vue.js'))
    .pipe(rename('vue.min.js'))
    .pipe(gulp.dest('themes/pFlipboard/static/js'));
});

// -----------------------------------------
// ## RUN CMD 'gulp webpack' TO MINIFY WEBPACK
gulp.task('webpack', () => {
  return gulp.src('themes/pFlipboard/static/babel/bundle.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('themes/pFlipboard/static/js'));
});
