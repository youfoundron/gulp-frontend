module.exports = (gulp, gutil, config) ->

  # call with flag --production to compile minified js
  gulp.task 'build', [ 'webpack', 'sass', 'jade', 'images', 'copy' ]
