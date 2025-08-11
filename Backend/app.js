const express = require('express');
const app = express();
const path = require('path');
// const bodyParser = require('body-parser');
const fronendData = require('../Backend/dataModels/frontendData');
const homePage = require('./express_routes/home_routes');
const RegisteredUser = require('./Model/registeredusers');
const eventRoutes = require('./express_routes/event_routes');
const registeredUserRoutes = require('./express_routes/registeredusers_routes');
const superAdminRoutes = require('./express_routes/superadmin_routes');
const {pageAuth} = require('./middleware/auth_middleware');
const authRoutes = require('./express_routes/auth_routes');
const mongoose = require('mongoose');
const session = require('express-session');

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //     maxAge: 360000 // 1 hour session
    // }
}));
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});
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
app.use(express.static(path.join(__dirname, 'uploads')));
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
        console.log("session:",req.session.user);
    }
    next();
})
//routers called here
app.use('/api/v1/home',homePage);
app.use(express.json());
app.use('/api/v2/events', eventRoutes);
app.use('/api/v3/registeredusers', registeredUserRoutes);
app.use('/api/v4/superadmin', superAdminRoutes);
app.use('/api/v4/auth', authRoutes);

app.get("/", (req, res) => {
    res.render("home.jade", {
        ...fronendData,
        reqUrl : req.url

    });
    
});

app.get("/events",pageAuth,(req,res) =>{
    const user = req.session.user;
    res.render("clg_admin.jade",  {
        ...fronendData,
        reqUrl : req.url,
        user: user,
        logo: user?.logofile || null
    });
})

app.get("/login",(req,res) =>{
    res.render("users_login.jade",  {
        ...fronendData,
        reqUrl : req.url
    });
})

// app.get("/logout", (req, res) => {
//   req.session.destroy(() => {
//     res.clearCookie("connect.sid"); // default session cookie
//     res.redirect("/login");
//   });
// });

app.get("/student-dash",pageAuth,(req,res) =>{
    res.render("student_dashboard.jade",  {
        ...fronendData,
        reqUrl : req.url
    });
})

app.get("/superadmin",pageAuth, (req,res) => {
    const user = req.session.user;
    res.render("super_admin_login.jade",{
        user : user
    });
})

app.get("/superadmindash", async (req, res) => {
    const users = await RegisteredUser.find();
    const collegeAdmins = users.filter(u => u.role === 'college admin');
    const students = users.filter(u => u.role === 'student');

    res.render('superadmin_dashboard', {
        webTitle: 'Super Admin Dashboard',
        collegeAdmins,
        students
    });

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
