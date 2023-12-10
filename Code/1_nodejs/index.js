var http = require("http");

http.createServer(function(requst,response){
    response.writeHead(200,{'content-Type':'text/plain'});

    response.end("Hello World - Praveen Raam C");
}).listen(3000);

console.log("Server runnning in 3000");