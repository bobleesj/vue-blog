const gulp = require('gulp')
const mocha = require('gulp-mocha')
const gutil = require('gulp-util')
const jshint = require('gulp-jshint')

// Beautify JS
gulp.task('lint', function() {
  return gulp.src(['app.js','server/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }))
})

// Run test with mocha
gulp.task('mocha', function() {
  return gulp.src(['test/unit-server/specs/**.js'], { read: false })
  .pipe(mocha({ reporter: 'list' }))
  .on('error', gutil.log)
})

// Watch
gulp.task('watch-test', function() {
  gulp.watch(['test/unit-server/specs/**.js', 'server/**', 'app.js'], gulp.series('lint', 'mocha'))
})

// Run
gulp.task('default', gulp.series('lint', 'mocha', 'watch-test'))
