var url = require('url');
var qs = require('querystring');
var http = require('http');
var io = require('socket.io').listen(9000);

http.createServer(function (request, response){
  if(request.method === 'POST'){
    var body ="";
    request.on('data', function(data){
      body += data;
    });
    request.on('end', function(){
      var post_data = qs.parse(body);
      io.sockets.send(post_data.msg);
    });
  }
  else if(request.method === 'GET'){
    var url_parts = url.parse(request.url, true);
    io.sockets.send(url_parts.query.msg);
  }
  else{
    response.writeHead(500);
    console.log("request failed");
  }
  response.end();
}).listen(4001);

io.sockets.on('connection', function(socket){
  socket.on('disconnect', function(){
    console.log("disconnected");
  });
  //connection established
  console.log("connected with socket: " + socket.id);
});
