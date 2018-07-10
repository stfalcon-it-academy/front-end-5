'use strict';

const gulp         = require('gulp'),                        // Підключаємо Gulp
      sass         = require('gulp-sass'),                   // Підключаємо 'gulp-sass' пакет Sass
      browserSync  = require('browser-sync'),                // Підключаємо 'browser-sync' (модуль що інжектить Css файл в браузер)
      concat       = require('gulp-concat'),                 // Підключаємо 'gulp-concat' для конкатенації (об'єднання) файлів
      uglify       = require('gulp-uglifyjs'),               // Підключаємо 'gulp-uglifyjs' для мініфікації (зжаття) js файлів
      cssnano      = require('gulp-cssnano'),                // Підключаємо 'gulp-cssnano' пакет для мініфікації css
      rename       = require('gulp-rename'),                 // Підключаємо 'gulp-rename' біліотеку для переіменування файлів
      imagemin     = require('gulp-imagemin'),               // Підключаємо 'gulp-imagemin' бібліотека для роботи з картинками
      pngquant     = require('imagemin-pngquant'),           // Підключаємо 'gulp-imagemin' бібліотека для роботи з svg
      cache        = require('gulp-cache'),                  // Підключаємо 'gulp-cache' бібліотека для кешування
      autoprefixer = require('gulp-autoprefixer'),           // Підключаємо 'gulp-autoprefixer' бібліотека для автоматичного додавання вендорних префіксів
      gcmq         = require('gulp-group-css-media-queries'),// Підключаємо 'gulp-group-css-media-queries' пакет для роботи з медіа запитами
      del          = require('del');                         // Підключаємо 'del' бібліотека для видалення папок та файлів



gulp.task('sass', function () {                                            // Створюємо таск 'sass'
    return gulp.src('src/sass/**/*.scss')                                  // Звідки берем код
        .pipe(sass({outputStyle: 'expanded'})                              // Перетворимо Sass в Css за допомогою gulp-sass,
            .on('error', sass.logError))                                   // Якщо буде 'error' (помилка в коді) то описати її в термінал але таск продовжувати вуконувати
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 7'],                         // Ставити вендорні префікси в 2 останіх версіях браузерів, IE - 7 та вище
            cascade: true                                                  // Генерує рівні стрічки коду вендорних префіксив
        }))
        .pipe(gcmq())
        .pipe(gulp.dest('src/css'))                                        // Куди вигружаєм результат
        .pipe(browserSync.reload({stream: true}))                          // browserSync підкидає (замінює) Css без перезавантаження сторінки
});


gulp.task('css-libs', function () {                 // Створюємо таск 'css-libs'
    return gulp.src('src/css/plugins/**/*.css')     // Вказуємо які берем файли
        .pipe(concat('libs.css'))                   // Об'єднуєм вибрані файли в один 'libs.css'
        .pipe(cssnano())                            // Мініфікуєм 'libs.css'
        .pipe(rename({suffix: '.min'}))             // Переіменовуєм 'libs.css' на 'libs.min.css'
        .pipe(gulp.dest('src/css'))                 // Вигружаєм в папку 'src/css'
});


gulp.task('js-libs', function () {          // Створюємо таск 'js-libs'
    return gulp.src('src/js/libs/**/*.js')  // Беремо всі необхідні файли бібліотеки
        .pipe(concat('libs.min.js'))        // Об'єднуєм їх в новому файлі libs.min.js
        .pipe(uglify())                     // Мініфікуєм js файл
        .pipe(gulp.dest('src/js'));         // Вигружаєм в папку 'src/js'
});


gulp.task('image-min', function () {                // Створюємо таск 'image-min'
    return gulp.src([
        //'!src/img/**/*.svg',                      // Не беремо картинки svg
        'src/img/**/*'                              // Беремо всі картинки
    ])
        .pipe(cache(imagemin({                      // Мініфікуєм та кешуєм (зберігаємо в пам'ять) зображення
            interlaced:  true,
            progressive: true,
            svgoPlugins:  [{removeViewBox: false}], // Забороняємо в svg видаляти ViewBox (щоб розмір не змінювався)
            use:         [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));            // Вигружаєм зображення в продакшн 'dist/img'
});


gulp.task('browser-sync', function () { // Створюємо таск 'browser-sync'
    browserSync.init({                  // Виконуєм 'browser-sync'
        server: {                       // Визначаємо параметри сервера
            baseDir: 'src/'             // Дерикторія для сервера 'src'
        },
        notify: false                   // Відключаємо повідомлення
    });
});


gulp.task('clean', function () {      // Створюємо таск 'clean'
    return del.sync('dist')     // Видалити все що в папці 'dist' (пред завантаженням готового проекту)
});


gulp.task('clear', function () {    // Створюємо таск 'clear'
    cache.clearAll()                // Очистка кешу
});


gulp.task('watch', ['browser-sync', 'css-libs', 'sass', 'js-libs'], function () {
    gulp.watch('src/сss/plugins/**/*.', ['css-libs']);                                                  // Слідкуємо за css-libs
    gulp.watch('src/sass/**/*.scss', ['sass']);                                                         // Слідкуємо за sass файлами в папці src
    gulp.watch('src/js/**/*.js', browserSync.reload);                                                   // Слідкуємо за js файлами при їх зміні перезавантажуєм сторінку
    gulp.watch('src/*.html', browserSync.reload);                                                       // Слідкуємо за html файлами при їх зміні перезавантажуєм сторінку
});


gulp.task('build', ['clean', 'image-min', 'sass', 'css-libs', 'js-libs'],function () {       // Таск який відповідає за мініфіковані img, css... які підуть в продакшн


    //-------------------------------------------------------------------------
    // CSS production----------------------------------------------------------

    let buildCss = gulp.src([                   // Які Css файли берем
        'src/css/libs.min.css',
        'src/css/style.css'
    ])
        .pipe(concat('style.min.css'))          // Об'єднуєм css файли в один
        .pipe(cssnano())                        // Мінімізуєм цей css файл
        .pipe(gulp.dest('dist/css'));           // Куда вигружаєм


    //----------------------------------------------------------------------------
    // Fonts production-----------------------------------------------------------

    let buildFonts = gulp.src('src/fonts/**/*') // Беремо всі шрифти
        .pipe(gulp.dest('dist/fonts'));         // Куда вигружаєм

    //----------------------------------------------------------------------------
    // Script production----------------------------------------------------------

    let buildScript = gulp.src([                // Беремо js файли
        'src/js/libs.min.js',
        'src/js/main.js'
    ])
        .pipe(concat('script.min.js'))          // Об'єднуєм в один
        .pipe(uglify())                         // Мінімізуєм
        .pipe(gulp.dest('dist/js'));            // Куда вигружаєм


    //----------------------------------------------------------------------------
    // HTML production------------------------------------------------------------

    let buildHtml = gulp.src('src/*.html')      // Беремо всі html файли
        .pipe(gulp.dest('dist'))                // Куда вигружаєм
});


gulp.task('default', ['watch']);                // Ті завдання які будуть відпрацьовуватись після введення 'gulp' в консоль
