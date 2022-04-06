const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

// scss -> css
function style() {
    // 1. where scss
    return gulp.src('./scss/**/*.scss')

    // 2. sass compile
        .pipe(sass())

    // 3. output css file
        .pipe(gulp.dest('./css'))

    // 4. stream
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch