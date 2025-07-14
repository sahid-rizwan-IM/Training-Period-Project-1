const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id: Number,
    eventName: String,
    eventType: String,
    eventDate: String,
    eventDescription: String,
    file: String
});

const myevents = mongoose.model("myevent",userSchema);

module.exports = myevents;