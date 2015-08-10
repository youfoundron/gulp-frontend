module.exports = (gulp, gutil, config) ->
  #copy fonts to dist
  gulp.task 'copy-fonts', ->
    changed     = require "gulp-changed"
    handleErrors   = require "#{global.__gulp}/util/handleErrors"

    paths      = config.get 'paths'

    src = "#{paths.src.fonts}/**/*"
    dest = paths.dist.fonts

    gulp.src src, {base: paths.src.fonts}
    .pipe changed(dest)
    .pipe gulp.dest(dest)

  # gulp.task 'copy-audio'

  # gulp.task 'copy-video'

  # copy all assets in copy task
  gulp.task 'copy', [ 'copy-fonts' ]
