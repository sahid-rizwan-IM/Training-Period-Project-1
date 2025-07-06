const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path'); //to find path based on os by itself.
// use() - its a middleware function/method - it works for all the routes automatically.
// get() and post() - these are router methods - works only when a particular url is called or requested.
app.use(express.json());
app.use(bodyParser.urlencoded());

app.use((req, res, next)=>{
    console.log("1st Middleware");
    next();
});
app.use((req, res, next)=>{
    console.log("2nd Middleware");
    next()
});
app.use((req, res, next)=>{
    console.log("3rd Middleware");
    // send() - used in express, it identifies the content-type of the passed data by itself.
    //sendFie() - if a file is passed, it reads the whole file (like html file)
    res.send('<h1>This is from epress</h1>');
    // next();
});

app.listen(3000, ()=>{
    console.log("server running on port 3000");
});
