const express = require('express');
const router = express.Router();
const homeController = require('../express_controller/home_controller');

router.get('/homenavdata', homeController.getHomeNavData);
router.get('/homecontent', homeController.getHomeContent);
router.get('/images', homeController.getHomeImages);
router.get('/home-rolescontents',homeController.getHomeRoles);
router.get('/homefooter', homeController.getHomeFooter);

module.exports = router;