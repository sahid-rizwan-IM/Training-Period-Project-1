const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fronendData = require('../Backend/dataModels/frontendData');
const homePage = require('./express_routes/home_routes');
const eventRoutes = require('./express_routes/event_routes');
// const path = require('path'); //to find path based on os by itself.
// use() - its a middleware function/method - it works for all the routes automatically.
// get() and post() - these are router methods - works only when a particular url is called or requested.
// send() - used in express, it identifies the content-type of the passed data by itself.
//sendFile() - if a file is passed, it reads the whole file (like html file)

app.use(bodyParser.json());//next handle function
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'Frontend')));
app.use('/static', express.static(path.join(__dirname, '..', 'Frontend', 'static')));
//routers called here
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.set("view engine", "jade");
app.set("views", path.join(__dirname, "views"));

app.use('/api/v1/home',homePage);
app.use('/api/v2/events', eventRoutes);

app.get("/", (req, res) => {
    res.render("home.jade", {
        ...fronendData,
        reqUrl : req.url

    });
    
});

app.get("/events",(req,res) =>{
    res.render("clg_admin.jade",  {
        ...fronendData,
        reqUrl : req.url

    });
})

//incorrect url error page
app.use((req, res, next)=>{
    console.log("default error");
    res.status(404).send("Error: Page Not Found!");
    next();
});


app.listen(3000, ()=>{
    console.log("server running on port 3000");
});
