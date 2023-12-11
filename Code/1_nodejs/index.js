var http = require("http");

http.createServer(function (requst, response) {
    response.writeHead(200, { 'content-Type': 'text/plain' });

    response.end("Hello World - Praveen Raam C - 7376222IT226");
}).listen(3000);

console.log("Server runnning in 3000");