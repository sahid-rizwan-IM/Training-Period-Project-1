const express = require('express');
const router = express.Router();
const eventValidator = require('../middleware/event_validation')
const eventController = require('../express_controller/events_controller');


router.get('/get-event/:id', eventController.getSingleEvent);
router.get('/get-allevents', eventController.getAllEvents);
router.post('/create-event', eventValidator.createEvent, eventController.createEvent);
router.delete('/delete-event/:id', eventController.deleteEvent);
router.put('/update-event/:id', eventController.updateEvent);


module.exports = router;

// jwt token app.use