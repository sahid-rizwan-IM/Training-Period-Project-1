// //creating a new server using node.js

// // console.log("hello, world!");
// const backendData = require('./dataModels/backendData.js');
// const frontendData = require('./dataModels/frontendData.js');

// // //http module will be used
// // const http = require('http'); //importing http package
// // const protocol = "http://";
// // let host = "localhost";
// // let baseUrl = "";
// // const server = http.createServer((req,res) => {
// //     host = req.headers.host;
// //     res.writeHead(200,{
// //         "Conten-Type":backendData.contentType.TEXTPLAIN,
// //     });
// //     res.end("Hello, World!");
// // });

// // const port = 3000;
// // server.listen(port, () => {
// //     console.log(`sever is running at ${protocol}${host}:${port}`)
// // });

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         const filePath = path.join(__dirname, "public", "/Frontend/templates/home.html");
//         fs.readFile(filePath, (err, content) => {
//             if (err) {
//                 res.writeHead(200, { "Content-Type": backendData.contentType.TEXTHTML });
//                 res.end(content);
                
//             } else {
//                 res.writeHead(500);
//                 res.end("Error loading page");
//             }
//         });
//     } else if (req.url === "/api/navbar") {
//         res.writeHead(200, { "Content-Type": backendData.contentType.APPJSON});
//         res.end(JSON.stringify(frontendData.navData));
//     }

//     else {
//         const filePath = path.join(__dirname, "public", req.url);
//         fs.readFile(filePath, (err, content) => {
//             if (err) {
//                 res.writeHead(404);
//                 res.end("Not Found");
//             } else {
//                 // Guess content type based on file extension
//                 let ext = path.extname(req.url);
//                 let contentType = "text/plain";
//                 if (ext === ".css") contentType = "text/css";
//                 else if (ext === ".js") contentType = "application/javascript";
//                 else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
//                 else if (ext === ".png") contentType = "image/png";
//                 else if (ext === ".html") contentType = "text/html";

//                 res.writeHead(200, { "Content-Type": contentType });
//                 res.end(content);
//             }
//         });
//     }
// });

// server.listen(5500, () => {
//     console.log("Server running on http://localhost:");
// });

const backendData = require('./dataModels/backendData.js');
const frontendData = require('./dataModels/frontendData.js');
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    // Serve HTML page
    if (req.url === "/") {
        const filePath = path.join(__dirname,"Frontend", "templates", "home.html");
        fs.readFile(filePath, (err, content) => {
            if (err) {
                console.error("READ ERROR:", filePath, err);
                res.writeHead(500);
                return res.end("Error loading page");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" }); // ✅ FIXED here
                res.end(content);
            }
        });
    }
    
    // Serve navbar API
    else if (req.url === "/api/navbar") {
        res.writeHead(200, { "Content-Type": backendData.contentType.APPJSON });
        res.end(JSON.stringify(frontendData.navData));
    }

    // Serve static files (CSS, JS, Images)
    else {
        const filePath = path.join(__dirname, "public", req.url);
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end("Not Found");
            } else {
                // Guess content type based on file extension
                let ext = path.extname(req.url);
                let contentType = "text/plain";
                if (ext === ".css") contentType = "text/css";
                else if (ext === ".js") contentType = "application/javascript";
                else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
                else if (ext === ".png") contentType = "image/png";
                else if (ext === ".html") contentType = "text/html";

                res.writeHead(200, { "Content-Type": contentType });
                res.end(content);
            }
        });
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
