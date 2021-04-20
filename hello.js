const http = require("http"); //loading http modules

const host = 'localhost';
const port = 8000;

//making a request listener to respond a http request
const requestListener = function (req, res){
    res.writeHead(200);
    res.end('My first server');
}

//creating the server on the host and port that are defined
const server = http.createServer(requestListener);
server.listen(port, host, ()=>{
    console.log(`Server is running on http//:${host}:${port}`);
});
