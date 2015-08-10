module.exports = (gulp, gutil, config) ->
  #run the server
  gulp.task 'serve', (cb) ->
    exec     = require 'gulp-exec'
    nodemon   = require 'gulp-nodemon'
    browserSync = require 'browser-sync'

    paths    = config.get 'paths'

    called    = false
    # we'd need a slight delay to reload browsers
    # connected to browser-sync after restarting nodemon
    BROWSER_SYNC_RELOAD_DELAY = 500

    nodemon(
      script: 'server.coffee'
      ext: 'coffee json'
      ignore: ['src/**/*', 'node_modules/**/*', 'views/**/*', 'dist/**/*', '.tmp/**/*', '.git/**/*', 'tmp/**/*', 'gulp/**/*']
      nodeArgs: []
      env:
        'NODE_ENV': if config.get('production') then 'production' else 'development'
    )
    .on 'start', ->
      if !called and cb?
        called = true
        return cb()
    .on 'restart', () ->
      console.log('restarted!')
      # reload connected browsers after a slight delay
      setTimeout ->
        browserSync.reload({
          stream: false
        })
      , BROWSER_SYNC_RELOAD_DELAY
