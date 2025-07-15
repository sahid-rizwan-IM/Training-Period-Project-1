const myEventsModel = require('../Model/events');

const eventController = {
  async getSingleEvent(req, res) {
    try {
      const eventId = req.params.id;
      const event = await myEventsModel.findOne({ id: eventId });

      if (!event) {
        return res.status(404).json({
          success: false,
          error: "Event not found",
          status: 404
        });
      }
      
      res.status(200).json({
        success: true,
        data: event,
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

  async getAllEvents(req, res) {
  try {
    const events = await myEventsModel.find();

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

  async createEvent(req, res) {
    try {
      const { eventName, eventType, eventDate, eventDescription } = req.body;
      const file = req.file ? req.file.filename : null;

      const newEvent = new myEventsModel({
        id: new Date().getTime(),
        eventName,
        eventType,
        eventDate,
        eventDescription,
        file
      });

      await newEvent.save();

      res.status(200).json({
        success: true,
        data: newEvent,
        message: "Event created successfully",
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

  async deleteEvent(req, res) {
    try {
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

  async updateEvent(req, res) {
    try {
      const eventId = req.params.id;
      const updatedData = req.body;
      if (req.file) {
        updatedData.file = req.file.filename;
      }

      const updated = await myEventsModel.findOneAndUpdate(
        { id: eventId },
        updatedData,
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({
          success: false,
          error: "Event not found",
          status: 404
        });
      }

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
