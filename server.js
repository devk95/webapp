var connect  = require('connect');
var static = require('serve-static');

var server = connect();


server.use(  static(__dirname + '/public'));

server.listen(3000);
console.log("Server is running. Ctrl + C to exit.");


var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/public");