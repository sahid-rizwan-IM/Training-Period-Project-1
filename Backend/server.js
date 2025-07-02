//creating a new server using node.js

console.log("hello, world!");
const backendData = require('./dataModels/backendData.js');
const frontendData = require('./frontendData.js');

//http module will be used
const http = require('http'); //importing http package
const protocol = "http://";
let host = "localhost";
let baseUrl = "";
const server = http.createServer((req,res) => {
    host = req.headers.host;
    res.writeHead(200,{
        "Conten-Type":backendData.contentType.TEXTPLAIN,
    });
    res.end("Hello, World!");
});

const port = 3000;
server.listen(port, () => {
    console.log(`sever is running at ${protocol}${host}:${port}`)
});