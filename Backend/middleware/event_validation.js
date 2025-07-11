function createEvent(req, res, next) {
    const { eventName, eventType, eventDate, eventDescription } = req.body;
    if (!eventName || !eventType || !eventDate || !eventDescription) {
    return res.status(400).json({
        success: false,
        error: "All fields are required",
        status: 400,
    });
    } else{
        return next()
    }
  // express-validator(req.body), koi-validator
}

// function deleteEvent(req,res,next){
//     const eventId = parseInt(req.params.id);
//     const rawData = fs.readFileSync(eventDataPath);
//     let events = JSON.parse(rawData);

//     const filteredEvents = events.filter(event => event.id !== eventId);

//     if (filteredEvents.length === events.length) {
//         return res.status(404).json({
//             success: false,
//             error: "Event not found",
//             status: 404
//         });
//     } else{
//         return next()
//     }
// }

module.exports = {
    createEvent
}
