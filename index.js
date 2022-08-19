var http = require('http');
var crypto = require('crypto');
//create a server object:
http.createServer(function (req, res) {
  res.write('HELLO WORLD and hello universe'); //write a response to the client
  res.end(); //end the response
}).listen(8080,()=>{console.log("hi")}); //the server object listens on port 8080