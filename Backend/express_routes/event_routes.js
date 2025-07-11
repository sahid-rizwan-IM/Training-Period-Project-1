const express = require('express');
const router = express.Router();
const eventController = require('../express_controller/events_controller');

router.get('/get-event/:id', eventController.getSingleEvent);
router.get('/get-allevents', eventController.getAllEvents);
router.post('/create-event', eventController.createEvent);
router.delete('/delete-event/:id', eventController.deleteEvent);
router.put('/update-event/:id', eventController.updateEvent);

module.exports = router;