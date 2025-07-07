const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('./path');
const frontendData = require('../dataModels/frontendData');
const homeNavController = require('../express_controller/home_controller');

router.get('/homenavdata', homeNavController.getHomeNavData);

router.get('/homecontent', (req, res) => {
    res.send(frontendData.homeContent);
});

router.get('/images', (req, res) => {
    const imageName = req.query.name;
    const imagePath = path.join(rootDir, '..', 'Frontend', 'static', 'images', imageName);
    res.sendFile(imagePath);
});

router.get('/home-rolescontents',(req,res) => {
    res.send({
        roles : frontendData.roles,
        cardsName : frontendData.cardsName
    });
})

module.exports = router;