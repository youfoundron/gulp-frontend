_path = require 'path'

module.exports = ->
  root = _path.normalize global.__base
  config = _path.normalize "#{root}/config.coffee"
  src =  _path.normalize "#{root}/src"
  dist = _path.normalize "#{root}/dist"

  root: root
  config: config
  gulp: _path.normalize "#{root}/gulp"

  views: _path.normalize "#{root}/views"

  bower: _path.normalize "#{src}/bower_components"

  src:
    root: src
    coffee: _path.normalize "#{src}/coffeescripts"
    js: _path.normalize "#{src}/javascripts"
    css: _path.normalize "#{src}/css"
    sass: _path.normalize "#{src}/sass"
    fonts: _path.normalize "#{src}/fonts"
    imgs: _path.normalize "#{src}/images"
    favicons: _path.normalize "#{src}/images/favicons"

  dist:
    root: dist
    js: _path.normalize "#{dist}/javascripts"
    css: _path.normalize "#{dist}/css"
    fonts: _path.normalize "#{dist}/fonts"
    imgs: _path.normalize "#{dist}/images"
    favicons: _path.normalize "#{dist}/images/favicons"
