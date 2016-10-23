var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var removeEmptyLines  = require('gulp-remove-empty-lines');

var sharedVars = require('./dev/config');

gulp.task('compile', function() {
  gulp.src('./dev/templates/sass-config.txt')
    .pipe(template(sharedVars))
    .pipe(rename('_sass-config.scss'))
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('./dev/sass'));

  gulp.src('./dev/templates/js-config.txt')
    .pipe(template(sharedVars))
    .pipe(rename('js-config.js'))
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('./dev/js'));
});

gulp.task('default', ['compile']);
