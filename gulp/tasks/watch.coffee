module.exports = (gulp, gutil, config) ->
  # Rerun the task when a file changes
  gulp.task "watch", ->
    browserSync   = require 'browser-sync'
    handleErrors   = require "#{global.__gulp}/util/handleErrors"

    app_config  = config.get 'app'
    paths       = config.get 'paths'
    path        = require 'path'

    browserSync {
      server:
        baseDir: paths.dist.root
      open: false
      browser: 'google chrome'
      watchOptions:
        debounceDelay: 200
      injectChanges: true
    }

    #scripts
    gulp.watch("#{paths.src.coffee}/**/*", ["webpack"]).on("error", handleErrors)
    gulp.watch("#{paths.src.js}/**/*", ["webpack"]).on("error", handleErrors)

    #sass
    gulp.watch("#{paths.src.sass}/**/*", ["sass"]).on("error", handleErrors)

    # views
    gulp.watch("#{paths.views}/**/*", ['jade'],).on("error", handleErrors)

    #images
    gulp.watch("#{paths.src.imgs}/**/*", ["images"]).on("error", handleErrors)

    #---- copy misc src ---#
    #fonts
    gulp.watch("#{paths.src.fonts}/**/*", ["copy-fonts"]).on("error", handleErrors)

    #watch dist for changes and reload
    gulp.watch("#{paths.dist.root}/**/*").on "change", browserSync.reload
