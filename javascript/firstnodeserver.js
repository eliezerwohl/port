var http = require("http");

var happyPort = 7000;
var sadPort = 7500;


function handleRequest(request, response) {
    response.end("It works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(happyPort, function() {
    console.log("Server is listening on: http://localhost:%s", happyPort); 
    console.log("be happy")
});