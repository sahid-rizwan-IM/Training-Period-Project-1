const url = require('url');
const mainFunctions = require('./mainFunctions');
const frontendData = require('./frontendData.js');
const backendData = require('./backendData.js');


function handleRoutes(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': backendData.contentType.TEXTHTML });
        res.end('<h1>Welcome to Multi-College Event Platform</h1>');
    }
    else if (pathname === '/api/homenavdata' && req.method === 'GET') {
        const combinedData = {
            navTitle: frontendData.navTitle,
            navData: frontendData.navData
        };
        mainFunctions.navBarData(res, combinedData);
    }
    else if (pathname === '/api/homecontent' && req.method === 'GET') {
        const homeContent = frontendData.homeContent;
        mainFunctions.navBarData(res, homeContent);
    }
    else if (pathname === '/images' && req.method === 'GET') {
        if (!query.name) {
            res.writeHead(400, { 'Content-Type': backendData.contentType.TEXTPLAIN });
            res.end('400 Bad Request: Image name missing');
        } else {
            mainFunctions.serveImage(res, query.name);
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': backendData.contentType.TEXTPLAIN });
        res.end('404 Not Found: Route invalid');
    }
}

module.exports = handleRoutes;



