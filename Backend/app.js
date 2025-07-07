const express = require('express');
const app = express();
const rootDir = require('./express_routes/path');
// const bodyParser = require('body-parser');
const homePage = require('./express_routes/home_routes');
const path = require('path'); //to find path based on os by itself.
// use() - its a middleware function/method - it works for all the routes automatically.
// get() and post() - these are router methods - works only when a particular url is called or requested.
// send() - used in express, it identifies the content-type of the passed data by itself.
//sendFile() - if a file is passed, it reads the whole file (like html file)
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'templates')));
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'static')));
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'script')));

app.get('/',(req,res)=>{
    console.log("home page here");
    res.sendFile(path.join(rootDir,'..','Frontend','templates','home.html'));
});
//routers called here
app.use('/api/v1/home',homePage);

//incorrect url error page
app.use((req, res, next)=>{
    console.log("default error");
    res.status(404).send("Error: Page Not Found!");
    next();
});

// app.use(bodyParser.urlencoded());//next handle function

app.listen(3000, ()=>{
    console.log("server running on port 3000");
});
