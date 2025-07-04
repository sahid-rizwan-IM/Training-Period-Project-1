const fs = require('fs');
const path = require('path');
// const backendData = require('./');
const { contentType } = require('./backendData.js');

function navBarData(res, combinedData){
        res.writeHead(200, { 
            'Content-Type': contentType.APPJSON,
            'Access-Control-Allow-Origin': '*' 
        });
        res.end(JSON.stringify(combinedData));

}

function serveImage(res, imageName) {
    const imagePath = path.join(__dirname, "Frontend", "static", "images", imageName);
    const ext = path.extname(imageName).toLowerCase();
    const mimeType = {
        '.jpg': contentType.JPEG,
        '.jpeg': contentType.JPEG,
        '.png': contentType.PNG,
        '.avif': contentType.AVIF
    }[ext] || contentType.BINARYFILE;

    fs.readFile(imagePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': contentType.TEXTPLAIN });
            res.end('404 Not Found: Image not found');
        } else {
            res.writeHead(200, { 'Content-Type': mimeType});
            res.end(data);
        }
    });
}

module.exports={
    navBarData,
    serveImage
}