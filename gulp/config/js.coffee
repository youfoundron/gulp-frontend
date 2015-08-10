module.exports = (config) ->
  paths = config.get "paths"
  app_config = config.get "app"

  # always load this lib to anything that wants it
  exposeGlobals:
    "$": "jquery"
    "_": "lodash"

  bundles: [
    {
      src: [ "#{paths.src.coffee}/main.coffee" ]
      dest: "_app.js"

      # http://webpack.github.io/docs/configuration.html#externals
      externals: [jquery:"jQuery", lodash:"_"]

      # JSON.stringify because strings don't get escaped
      vars:
        "_hostname_": JSON.stringify(app_config.hosturl)
        "_CDN_": JSON.stringify(app_config.cdn)
    }
  ]
