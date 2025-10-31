const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const serve = require('gulp-serve');

// Task to minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src('src/app/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
});

// Task to minify CSS files
gulp.task('styles', function() {
    return gulp.src('src/styles/*.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'));
});

// Task to copy HTML files
gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

// Task to serve the application
gulp.task('serve', serve({
    root: 'dist',
    port: 3000,
    livereload: true
}));

// Default task
gulp.task('default', gulp.series('scripts', 'styles', 'html', 'serve'));