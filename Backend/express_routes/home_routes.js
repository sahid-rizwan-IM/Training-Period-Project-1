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
    res.json({
        navTitle: frontendData.navTitle,
        navData: frontendData.navData
    });
});

// API: home content
router.get('/api/homecontent', (req, res) => {
    res.json(frontendData.homeContent);
});

module.exports = router;