  var ws = require('nodejs-websocket')
  var server = ws.createServer(function(conn){
  	console.log('123')
  }).listen(8887);