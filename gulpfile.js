var browser  = require('browser-sync');
var gulp     = require('gulp');
var ghPages  = require('gulp-gh-pages');

// Port to use for the development server.
var PORT = 8000;

gulp.task('deploy', function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});

// Start a server with LiveReload to preview the site in
gulp.task('server', function() {
  browser.init({
    notify: false,
    open: false,
    port: PORT,
    server: 'public',
  });
});

gulp.task('default', ['server'], function() {
  // place code for your default task here
});
