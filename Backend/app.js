const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const homePage = require('./express_routes/home_routes');
const path = require('path'); //to find path based on os by itself.
// use() - its a middleware function/method - it works for all the routes automatically.
// get() and post() - these are router methods - works only when a particular url is called or requested.
// send() - used in express, it identifies the content-type of the passed data by itself.
//sendFie() - if a file is passed, it reads the whole file (like html file)
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'templates')));
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'static')));
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'script')));
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'static', 'images')));
app.use(homePage);

app.use((req, res, next)=>{
    console.log("default");
    res.status(404).send("Error: Page Not Found!");
});

// app.use(bodyParser.urlencoded());//next handle function

app.listen(3000, ()=>{
    console.log("server running on port 3000");
});
