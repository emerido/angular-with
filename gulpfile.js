var
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify')
;


gulp.task('build', function () {
    gulp.src('src/*.js')
        .pipe(concat('angular-with.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/'))
    ;
});