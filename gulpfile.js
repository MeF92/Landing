var gulp = require('gulp');
var bs = require('browser-sync');
var less = require('gulp-less');

gulp.task('server', function() {
    bs.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
    gulp.watch('css/*.less', [less]);
    gulp.watch("./*.html").on('change', bs.reload);
});

gulp.task('less', function () {
   return gulp.src('./css/*.less').pipe(bs.stream());
});