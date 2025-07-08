const express = require('express');
const router = express.Router();
const eventController = require('../express_controller/events_controller');


router.get('/get-events', eventController.getAllEvents);
router.post('/create-event', eventController.createEvent);

module.exports = router;