const myEventsModel = require('../Model/events');

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
