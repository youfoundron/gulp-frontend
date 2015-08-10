module.exports = (gulp, gutil, config) ->
  # Copy all static images
  gulp.task "images", (cb) ->
    imagemin   = require "gulp-imagemin"
    pngquant   = require 'imagemin-pngquant'
    changed   = require "gulp-changed"
    plumber   = require "gulp-plumber"

    handleErrors = require "#{global.__gulp}/util/handleErrors"

    paths    = config.get 'paths'

    src = "#{paths.src.imgs}/**/*.{jpg,jpeg,gif,png,svg,ico}"
    dest = "#{paths.dist.imgs}"
    # Pass in options to the task
    gulp.src src
    .pipe changed(dest)
    #catch errors
    .pipe plumber()
    .pipe imagemin(
      optimizationLevel: 5
      progressive: true
      interlaced: false
      use: [pngquant({quality: '75-85', speed: 4})]
    )
    .on 'error', handleErrors
    .pipe gulp.dest(dest)
