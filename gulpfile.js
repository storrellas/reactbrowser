var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({    
      server: { baseDir: "./nc2ui" },
      port: 3000
  });

  // Watch
  gulp.watch(['nc2ui/*']).on("change", () => browserSync.reload() );

});