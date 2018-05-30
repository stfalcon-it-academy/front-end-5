'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    gcmq = require('gulp-group-css-media-queries'),
    uncss = require('gulp-uncss'),
    del          = require('del');



gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            // browsers:['last 2 versions'],
            cascade:true
        }))
        .pipe(gcmq())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('css-libs', function () {
    return gulp.src('src/css/plugins/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('src/css'))
});

gulp.task('js-libs', function() {
    return gulp.src([
        'src/js/libs/jquery-3.3.1.min.js',
        'src/js/libs/**/*.js'])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'));
});

gulp.task('image-min', function () {
    return gulp.src('src/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "src/"
        },
        notify: false
    });
});

gulp.task('clean', function () {
   return del.sync('dist');
});

gulp.task('clear', function () {
    cache.clearAll()
});

gulp.task('watch',['browser-sync','css-libs','sass','js-libs'], function () {
    gulp.watch('src/css/plugins/**/*.', ['css-libs']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/libs/**/*.js', ['js-libs']);
    gulp.watch('src/js/**/*.js', browserSync.reload);
    gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('build',['clean','image-min','sass','css-libs','js-libs'], function () {

    // CSS prodaction
    // -------------------------------------------------------------------------------------

    let buildCss = gulp.src([
        'src/css/libs.min.css',
        'src/css/style.css'

    ])

        .pipe(concat('style.min.css'))
        .pipe(uncss({
            html: ['src/*.html'],
            ignore:[/\.slick/,
                /\.red/,
                /\.red2/,
                /\.burger-close/,
                /\.burger-close2/,
                /\.error/,
                /\.remodal/,
                /\.fixed/
            ]
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));

    // Fonts prodaction
    // -------------------------------------------------------------------------------------

    let buildFonts = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    // Script prodaction
    // -------------------------------------------------------------------------------------

    let buildScript = gulp.src([
        'src/js/libs.min.js',
        'src/js/main.js'
    ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

    // Html prodaction
    // -------------------------------------------------------------------------------------

    let buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('default',['watch']);