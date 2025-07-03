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

module.exports={
    navBarData
}