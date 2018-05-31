const gulp = require('gulp'),
  watch = require('gulp-watch'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  imagemin = require('gulp-imagemin'),
  htmlmin = require('gulp-htmlmin'),
  removeEmptyLines = require('gulp-remove-empty-lines'),
  cleanCSS = require('gulp-clean-css'),
  del = require('del'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  changed = require('gulp-changed'),
  cache = require('gulp-cache'),
  gcmq = require('gulp-group-css-media-queries'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  order = require("gulp-order"),
  pngquant = require('imagemin-pngquant'),
  rename = require("gulp-rename"),
  htmlhint = require("gulp-htmlhint"),
  inject = require('gulp-inject'),
  mainBowerFiles = require('main-bower-files'),
  runSequence = require('run-sequence'),
  rebaseUrls = require('gulp-css-rebase-urls'),
  uncss = require('gulp-uncss');

// Server connect
gulp.task('browserSync', function () {
  browserSync.init({
    server: './src',
    notify: false,
    open: false
  });
});

gulp.task('cleanup', ['cleanJS', 'cleanCss']);

gulp.task('uploadVendorJS', ['jqueryLib', 'slickJS']);

gulp.task('uploadVendorStyles', ['slickScss', 'normalize']);

gulp.task('uploadVendorSources', ['uploadVendorStyles', 'uploadVendorJS']);

gulp.task('default', ['cleanup', 'uploadVendorSources', 'watch']);

// html
gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
});

// inject
gulp.task('inject', function () {
  var sources = gulp.src(['./src/js/main.js', './src/css/style.css']);
  return gulp.src('./src/*.html')
    .pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest('./src'));
});

// scss
gulp.task('sass', function () {
  return gulp.src('./src/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', function () {
  return gulp.src(['!./src/js/*.js', './src/js/**/*.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(order([
      'libs/*.js',
      'plugins/*.js',
      'components/*.js'
    ]))
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/js'))
    .pipe(browserSync.stream());
});

gulp.task('cleanCss', function () {
  del.sync(['./src/css/style.css'], { force: true });
})

gulp.task('cleanJS', function () {
  del.sync(['!./src/js/components/**/*.js', './src/js/libs/*.js', './src/js/plugins/*.js', './src/js/main.js'], { force: true });
});

// bower jquery
gulp.task('jqueryLib', function () {
  gulp.src(mainBowerFiles('**/jquery.js'))
    .pipe(gulp.dest('./src/js/libs'));
});

// bower slick
gulp.task('slickJS', function () {
  gulp.src(mainBowerFiles('**/slick.js'))
    .pipe(gulp.dest('./src/js/plugins'));
});

gulp.task('slickScss', function () {
  gulp.src(mainBowerFiles('**/slick.scss'))
    .pipe(gulp.dest('./src/scss/libs'));
});

// bower normalize
gulp.task('normalize', function () {
  gulp.src(mainBowerFiles('**/normalize.css'))
    .pipe(rename({ extname: ".scss" }))
    .pipe(gulp.dest('./src/scss/libs'));
});

// img
gulp.task('img', function () {
  return gulp.src('./src/img/**/*.+(png|jpg|jpeg|svg)')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/img'))
});

// fonts
gulp.task('fonts', function () {
  return gulp.src(['./src/fonts/**/*.+(woff|woff2|ttf|eot)'])
    .pipe(gulp.dest('./dist/fonts'))
});

gulp.task('clean', function () {
  del.sync(['./dist/*', '!./dist/.gitkeep'], { force: true });
});

// build
gulp.task('build', ['clean', 'sass', 'js', 'img', 'fonts'], function () {
  runSequence('copy:build', 'css:build', 'js:build', 'html:build', function () {
    var sources = gulp.src(['./dist/js/main.min.js', './dist/css/style.min.css'], { read: false });
    return gulp.src('./dist/*.html')
      .pipe(inject(sources, { relative: true }))
      .pipe(htmlmin({
        sortClassName: true,
        sortAttributes: true,
        caseSensitive: true,
        removeComments: true
      }))
      .pipe(removeEmptyLines())
      .pipe(gulp.dest('./dist'))
  });
});

gulp.task('copy:build', function () {
  return gulp.src(['!./src/*.html', './src/*.*'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('css:build', function () {
  return gulp.src(['./src/css/style.css'])
    .pipe(rebaseUrls({ root: './css' }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gcmq())
    .pipe(cleanCSS({
      compatibility: "ie8",
      keepSpecialComments: 0
    }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js:build', function () {
  return gulp.src('./src/js/main.js')
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('html:build', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

// watch
gulp.task('watch', ['sass', 'browserSync'], function () {

  gulp.watch('./src/*.html', ['html'])
    .on('change', browserSync.reload);

  gulp.watch('./src/scss/**/*.scss', ['sass'])
    .on('change', browserSync.reload);

  gulp.watch('./src/js/**/*.js', ['js'])
    .on('change', browserSync.reload);

  gulp.watch('./src/fonts/**/*.+(woff|woff2|ttf|eot)')
    .on('change', browserSync.reload);

  gulp.watch('./src/img/**/*.+(png|jpg|jpeg|svg)')
    .on('change', browserSync.reload);

  runSequence('js', 'inject');
});

gulp.task('clearCache', function () {
  return cache.clearAll();
})
