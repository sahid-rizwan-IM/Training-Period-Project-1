//creating a new server using node.js
//http module will be used
const http = require('http'); //importing http package
const handelRoutes = require('./dataModels/routes')
const protocol = "http://";
let host = "localhost";
let baseUrl = "";
const server = http.createServer((req,res) => {
    host = req.headers.host;
    handelRoutes(req,res);
});

const port = 3000;
server.listen(port, () => {
    console.log(`sever is running at ${protocol}${host}:${port}`)
});
