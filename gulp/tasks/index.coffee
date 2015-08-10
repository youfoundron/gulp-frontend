module.exports = (gulp, gutil, config) ->
  fs = require 'fs'
  path = require 'path'

  # autoload gulp tasks
  fs.readdirSync(__dirname).forEach (file) ->
    file_path = path.join __dirname, file
    name = path.basename file, path.extname(file)
    stats = fs.statSync file_path
    return if (/^index./.test(file)) or (/^\./.test(file)) or !stats.isFile()
    require(file_path)(gulp, gutil, config)
