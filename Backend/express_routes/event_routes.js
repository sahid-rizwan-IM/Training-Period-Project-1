const express = require('express');
const router = express.Router();
const path = require('path');
const authMiddleware = require('../middleware/auth_middleware');
const eventValidator = require('../middleware/event_validation')
const eventController = require('../express_controller/events_controller');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads','event_files'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Only JPG, PNG, or PDF files are allowed'), false);
};

const upload = multer({ storage, fileFilter });

router.get('/get-event/:id', eventController.getSingleEvent);
router.get('/get-allevents', eventController.getAllEvents);
router.post('/create-event',authMiddleware,upload.single('file'), eventValidator.createEvent, eventController.createEvent);
router.delete('/delete-event/:id',eventValidator.deleteEvent, eventController.deleteEvent);
router.put('/update-event/:id', eventController.updateEvent);
router.get('/get-other-events', eventController.getOtherCollegeEvents);

module.exports = router;
// jwt token app.use