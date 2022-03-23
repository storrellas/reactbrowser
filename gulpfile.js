var gulp = require('gulp');
var gls = require('gulp-live-server');
gulp.task('serve', function() {
  //1. serve with default settings
  var server = gls.static('public', 8080); //equals to gls.static('public', 3000);
  server.start();
})