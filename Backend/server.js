//creating a new server using node.js

const backendData = require('./dataModels/backendData.js');
const frontendData = require('./dataModels/frontendData.js');

//http module will be used
const http = require('http'); //importing http package
const protocol = "http://";
let host = "localhost";
let baseUrl = "";
const server = http.createServer((req,res) => {
    host = req.headers.host;
    // if (req.url === '/' && req.method === 'GET') {
        const combinedData = {
            navTitle: frontendData.navTitle,
            navData: frontendData.navData
        };
        res.writeHead(200, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
        });
        res.end(JSON.stringify(combinedData));
// }
    // res.writeHead(200,{
    //     "Content-Type":backendData.contentType.APPJSON,
    //     "access-control-allow-origin":"*"
    // });
    // res.end(JSON.stringify(frontendData.navTitle));
    // res.end(JSON.stringify(frontendData.navData));
    
});

const port = 3000;
server.listen(port, () => {
    console.log(`sever is running at ${protocol}${host}:${port}`)
});

