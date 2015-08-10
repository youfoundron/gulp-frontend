express = require 'express'
serveStatic = require 'serve-static'
app_config = require('./config')()

app = express()
app.use serveStatic(__dirname + '/dist', {index: ['index.html']})

port = process.env.PORT || app_config.port
server = app.listen port, () ->
  host = server.address().address
  console.log 'Node app listening at http://%s:%s', host, port
