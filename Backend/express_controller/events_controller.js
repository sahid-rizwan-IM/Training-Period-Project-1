const fs = require('fs');
const path = require('path');
const eventDataPath = path.join(__dirname, '..', 'Model', 'eventcreate.json');

const eventController = {
    getAllEvents(req, res) {
        try {
            const rawData = fs.readFileSync(eventDataPath);
            const events = JSON.parse(rawData);
            res.status(200).json({
                success: true,
                data: events,
                error: null,
                status: 200
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                data: null,
                error: err.message,
                status: 500
            });
        }
    },

    createEvent(req, res) {
        try {
            const { eventName, eventType, eventDate, eventDescription } = req.body;
            if (!eventName || !eventType || !eventDate || !eventDescription) {
                return res.status(400).json({
                    success: false,
                    error: 'All fields are required',
                    status: 400
                });
            }

            const newEvent = {
                id: new Date().getTime(),
                eventName,
                eventType,
                eventDate,
                eventDescription
            };

            let events = [];
            if (fs.existsSync(eventDataPath)) {
                const rawData = fs.readFileSync(eventDataPath);
                events = JSON.parse(rawData);
            }

            events.push(newEvent);
            fs.writeFileSync(eventDataPath, JSON.stringify(events,null,2));

            res.status(200).json({
                success: true,
                data: newEvent,
                message: 'Event created successfully',
                status: 200
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                data: null,
                error: err.message,
                status: 500
            });
        }
    }
};

module.exports = eventController;