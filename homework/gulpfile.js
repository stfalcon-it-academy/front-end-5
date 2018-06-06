var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglifyjs'),
	  cssnano      = require('gulp-cssnano'),
	  rename       = require('gulp-rename'),
  	del          = require('del'),
  	imagemin     = require('gulp-imagemin'),
  	pngquant     = require('imagemin-pngquant'),
  	cache        = require('gulp-cache'),
  	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
               .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
               .pipe(autoprefixer(['last 2 versions', 'ie 8', 'ie 7'], { cascade: true }))
               .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('imagemin', () =>
    gulp.src('src/img/*/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
            }))
        .pipe(gulp.dest('dist/src/img'))
);

gulp.task('clean', function() {
	return del.sync('dist', {force:true});
});

gulp.task('buildScripts', () =>
  gulp.src([
            'src/js/libs/*',
            'src/js/script.js'
          ])
            .pipe(concat('scripts.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/src/js'))
);

gulp.task('buildCSS', function() {
  gulp.src([
        'src/css/libs/*',
        'src/css/*'
          ])
            .pipe(concat('style.min.css'))
            .pipe(cssnano())
            .pipe(gulp.dest('dist/src/css'));
});

gulp.task('buildHTML', () =>
  gulp.src('*.html')
            .pipe(gulp.dest('dist'))
);
gulp.task('buildFonts', () =>
  gulp.src('src/fonts/*')
          .pipe(gulp.dest('dist/src/fonts'))
);

gulp.task('build', ['clean', 'imagemin', 'sass', 'buildScripts', 'buildCSS', 'buildFonts', 'buildHTML']);
//____________________________________________________________________________________________

gulp.task('default',[]);
