var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('You\'ve crated a gulp task');
});

gulp.task('html', function() {
    console.log('Some happened involving html...');
});
gulp.task('styles', function() {
    console.log('Some happened involving styles...');
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});