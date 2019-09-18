const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const nunjucksRender = require('gulp-nunjucks-render');
const webpack = require('webpack-stream');
const del = require('del');
const sass = require('gulp-sass');
const prettier = require('gulp-prettier');
let cleanCss = require('gulp-clean-css');

function clean() {
  return del(['./dist']);
}

function copy() {
  return gulp.src('./src/img/*').pipe(gulp.dest('./dist/img'));
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './dist/',
    },
    port: 3000,
  });

  done();
}

function browserSyncReload(done) {
  browsersync.reload();

  done();
}
function javascript() {
  return gulp
    .src('src/app/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'))
    .pipe(browsersync.stream());
}

function css() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass({includePaths: ['node_modules']}))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/'))
    .pipe(browsersync.stream());
}

function nunjucks() {
  return gulp
    .src('./src/templates/pages/**/*.html', {base: './src/templates/pages'})
    .pipe(
      nunjucksRender({
        path: ['./src/templates/'],
      }),
    )
    .pipe(prettier())
    .pipe(gulp.dest('./dist'));
}

function watch() {
  gulp.watch('./src/img/**/*', gulp.series(copy));
  gulp.watch('./src/scss/**/*', gulp.series(css));
  gulp.watch('./src/app/**/*', gulp.series(javascript));
  gulp.watch(
    ['./src/templates/**/*'],
    gulp.series(nunjucks, browserSyncReload),
  );
}

exports.watch = gulp.parallel(watch, browserSync);
exports.default = gulp.series(
  clean,
  gulp.parallel(copy, nunjucks, css, javascript),
);
