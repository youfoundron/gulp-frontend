path = require 'path'
_    = require 'lodash'
etc  = require 'etc'

gulp_config = etc()
app_config = etc()

# add coffee parser
coffee_parser = (file_path) ->
  f = require file_path
  if _.isFunction f
    return f(gulp_config)
  else
    return f

gulp_config.parsers['coffee'] = app_config.parsers['coffee'] = coffee_parser

# load args
gulp_config.argv()

# set production variable
gulp_config.set('production', false) unless gulp_config.get 'production'

# include the paths
paths = require(path.join(__dirname, "paths.coffee"))()
gulp_config.set "paths", paths

# load in app config and add to gulp config
app_config.file gulp_config.get('paths:config')
gulp_config.set 'app', app_config.toJSON()

# load in default files
gulp_config.folder __dirname

# export
module.exports = gulp_config
