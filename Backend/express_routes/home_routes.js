const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('./path');
const frontendData = require('../dataModels/frontendData');

router.get('/home',(req,res,next)=>{
    console.log("home page here");
    res.sendFile(path.join(rootDir,'..','Frontend','templates','home.html'));
});

router.get('/api/homenavdata', (req, res) => {
    res.send({
        navTitle: frontendData.navTitle,
        navData: frontendData.navData
    });
});

router.get('/api/homecontent', (req, res) => {
    res.send(frontendData.homeContent);
});

router.get('/images', (req, res) => {
    const imageName = req.query.name;
    const imagePath = path.join(rootDir, '..', 'Frontend', 'static', 'images', imageName);
    res.sendFile(imagePath);
});

module.exports = router;