const mongoose = require('mongoose');

const myEventSchema = new mongoose.Schema({
  id: Number, //user.id
  eventName: String,
  eventType: String,
  eventDate: String,
  eventDescription: String,
  file: String
}, { collection: 'myEvents' });

const myEventsModel = mongoose.model("myEvents", myEventSchema);
module.exports = myEventsModel;
 