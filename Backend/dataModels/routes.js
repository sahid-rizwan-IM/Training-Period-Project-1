const url = require('url');
const { navBarData } = require('./mainFunctions');
const frontendData = require('./frontendData.js');


function handleRoutes(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to Multi-College Event Platform</h1>');
    }
    else if (pathname === '/api/data' && req.method === 'GET') {
        const combinedData = {
            navTitle: frontendData.navTitle,
            navData: frontendData.navData
        };
        navBarData(res, combinedData);
    }
    // else if (pathname === '/image' && req.method === 'GET') {
    //     if (!query.name) {
    //         res.writeHead(400, { 'Content-Type': 'text/plain' });
    //         res.end('400 Bad Request: Image name missing');
    //     } else {
    //         serveImage(res, query.name);
    //     }
    // }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found: Route invalid');
    }
}

module.exports = handleRoutes;



