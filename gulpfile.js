var gulp = require('gulp');
var gls = require('gulp-live-server');
var browserSync = require('browser-sync').create();
gulp.task('serve', function() {
  //1. serve with default settings
  var server = gls.static('public', 8080); //equals to gls.static('public', 3000);
  server.start();
})

gulp.task('browser-sync', function() {
  browserSync.init({    
      server: { baseDir: "./public" },
      port: 8080
  });

  // Watch
  gulp.watch(['public/*']).on("change", () => browserSync.reload() );

});