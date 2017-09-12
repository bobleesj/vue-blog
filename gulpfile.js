var gulp = require('gulp');
const mocha = require('gulp-mocha');
var gutil = require('gulp-util');


gulp.task('mocha', function() {
  return gulp.src(['test.js'], { read: false })
  .pipe(mocha({ reporter: 'list' }))
  .on('error', gutil.log);
});

gulp.task('watch-test', function() {
  gulp.watch(['test.js', 'server.js'], gulp.series('mocha'));
});


gulp.task('default', gulp.series('mocha', 'watch-test'))
