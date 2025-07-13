// 
const fs = require('fs');
const path = require('path');
const eventDataPath = path.join(__dirname, '..', 'Model', 'eventcreate.json');

const eventController = {
    getSingleEvent(req,res){
        try{
            const eventId = parseInt(req.params.id);
            const rawData = fs.readFileSync(eventDataPath);
            let events = JSON.parse(rawData);
            const newEvent = events.filter(event => event.id === eventId);

            res.status(200).json({
                success: true,
                data: newEvent,
                error: null,
                status: 200
            });
        } catch (err){
            res.status(500).json({
                success: false,
                data: null,
                error: err.message,
                status: 500
            });
        }
    },

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
            const fileInfo = req.file ? req.file.filename : null;

            const newEvent = {
                id: new Date().getTime(),
                eventName,
                eventType,
                eventDate,
                eventDescription,
                file: fileInfo
            };

            let events = [];
            if (fs.existsSync(eventDataPath)) {
                const rawData = fs.readFileSync(eventDataPath);
                events = JSON.parse(rawData);
            }

            events.push(newEvent);
            fs.writeFileSync(eventDataPath, JSON.stringify(events, null, 2));

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
    },

    deleteEvent(req, res) {
        try {
            const eventId = parseInt(req.params.id);
            const rawData = fs.readFileSync(eventDataPath);
            let events = JSON.parse(rawData);

            const filteredEvents = events.filter(event => event.id !== eventId);

            fs.writeFileSync(eventDataPath, JSON.stringify(filteredEvents, null, 2));
            res.status(200).json({
                success: true,
                message: "Event deleted successfully",
                status: 200
            });

        } catch (err) {
            res.status(500).json({
                success: false,
                error: err.message,
                status: 500
            });
        }
    },

    updateEvent(req, res) {
        try {
            const eventId = parseInt(req.params.id);
            const eventBody = req.body;
            const fileInfo = req.file ? req.file.filename : null;

            const rawData = fs.readFileSync(eventDataPath);
            let events = JSON.parse(rawData);

            const eventIndex = events.findIndex(event => event.id === eventId);

            if (eventIndex === -1) {
                return res.status(404).json({
                    success: false,
                    error: "Event not found",
                    status: 404
                });
            }

            const updatedEvent = {
                id: eventId,
                ...eventBody
            };
            if (fileInfo) updatedEvent.file = fileInfo;

            events[eventIndex] = updatedEvent;
            fs.writeFileSync(eventDataPath, JSON.stringify(events, null, 2));

            res.status(200).json({
                success: true,
                message: "Event updated successfully",
                status: 200
            });

        } catch (err) {
            res.status(500).json({
                success: false,
                error: err.message,
                status: 500
            });
        }
    }
};

module.exports = eventController;
