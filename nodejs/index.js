require('systemd');
require('autoquit');

var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
server.autoQuit({timeOut: 5});
server.listen(process.env.NODE_ENV == 'production' ? 'systemd' : 3000);
