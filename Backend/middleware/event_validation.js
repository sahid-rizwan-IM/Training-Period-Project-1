const fs = require('fs');
const path = require('path');
const myEventsModel = require('../Model/events');
const event_files = path.join(__dirname, '..', 'uploads', 'event_files');

function createEvent(req, res, next) {
    const { eventName, eventType, eventDate, eventDescription } = req.body;

    if (!eventName || !eventType || !eventDate || !eventDescription) {
        return res.status(400).json({
            success: false,
            error: "All fields are required",
            status: 400,
        });
    }

    return next();
}

async function deleteEvent(req, res, next) {
    const eventId = req.params.id;
    const event = await myEventsModel.findOneAndDelete({ id: eventId });
    if (event.file) {
        const filePath = path.join(event_files, event.file);

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error("File deletion error:", err.message);
            }
        });
    }

    if (!event) {
        return res.status(404).json({
            success: false,
            error: "Event not found",
            status: 404
        });
    }
    return next();
}

module.exports = {
    createEvent,
    deleteEvent
};
