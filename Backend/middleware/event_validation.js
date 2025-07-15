const myEventsModel = require('../Model/events');

// Middleware for event creation
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

// Middleware for event deletion (MongoDB)
async function deleteEvent(req, res, next) {
    const eventId = req.params.id; // Example: "Event-1721034567890"

    try {
        const event = await myEventsModel.findOne({ id: eventId });

        if (!event) {
            return res.status(404).json({
                success: false,
                error: "Event not found",
                status: 404
            });
        }

        return next();
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Internal Server Error",
            status: 500
        });
    }
}

module.exports = {
    createEvent,
    deleteEvent
};
