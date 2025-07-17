const express = require('express');
const app = express();
const path = require('path');
// const bodyParser = require('body-parser');
const fronendData = require('../Backend/dataModels/frontendData');
const homePage = require('./express_routes/home_routes');
const eventRoutes = require('./express_routes/event_routes');
const registeredUserRoutes = require('./express_routes/registeredusers_routes');
const superAdminRoutes = require('./express_routes/superadmin_routes');
const authRoutes = require('./express_routes/auth_routes');
const mongoose = require('mongoose');
// const myEventsModel = require('./Model/events');
// const path = require('path'); //to find path based on os by itself.
// use() - its a middleware function/method - it works for all the routes automatically.
// get() and post() - these are router methods - works only when a particular url is called or requested.
// send() - used in express, it identifies the content-type of the passed data by itself.
//sendFile() - if a file is passed, it reads the whole file (like html file).

// app.use(bodyParser.json());//next handle function
// app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ success: false, error: 'Invalid JSON body' });
  }
  next();
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.set("view engine", "jade");
app.set("views", path.join(__dirname, "views"));

mongoose.connect("mongodb://localhost:27017/multiCollegeEvents")
    .then(() => {
        console.log("MongoDB Connected");
        
    })
    .catch( err=> {
        console.error("Connection failed", err.message);
    });
app.use(async(req,res,next)=>{

    if(req.session?.userId){
        req.session.userId = req.session.userId;
        req.session.user = await RegisteredUser.findOne({
            _id: req.session.userId
        })
    }
    next();
})
//routers called here
app.use('/api/v1/home',homePage);
app.use(express.json());
app.use('/api/v2/events', eventRoutes);
// app.use('/api/v2/events', eventRoutes);
app.use('/registeredusers', registeredUserRoutes);
app.use('/superadmin', superAdminRoutes);

app.use('/api/v4/auth', authRoutes);



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

app.get("/login",(req,res) =>{
    res.render("users_login.jade",  {
        ...fronendData,
        reqUrl : req.url
    });
})

app.get("/superadmin", (req,res) => {
    res.render("super_admin_login.jade");
})

app.get("/superadmindash", async (req, res) => {
  try {
    const allUsers = await RegisteredUser.find();
    const collegeAdmins = allUsers.filter(u => u.role === "collegeAdmin");
    const students = allUsers.filter(u => u.role === "student");

    res.render("superadmin_dashboard.jade", {
      webTitle: 'Super Admin Dashboard',
      collegeAdmins,
      students
    });
  } catch (err) {
    console.error("Error fetching users:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

//incorrect url error page
app.use((req, res, next)=>{
    console.log("default error");
    res.status(404).send("Error: Page Not Found!");
    next();
});


app.listen(3000, ()=>{
    console.log("server running on port 3000");
});
