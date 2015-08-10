module.exports = (gulp, gutil, config) ->
  # Copy all static images
  gulp.task "jade", (cb) ->
    jade      = require "gulp-jade"
    changed   = require "gulp-changed"
    handleErrors   = require "#{global.__gulp}/util/handleErrors"

    paths    = config.get 'paths'
    jade_config = config.get 'jade'

    src = jade_config.src
    dest = jade_config.dest
    locals = jade_config.locals

    gulp.src src
    .pipe changed(dest)
    .pipe jade {locals: locals, basedir: paths.views, pretty: true}
    .pipe gulp.dest dest
    .on 'error', handleErrors
