const mongoose = require("mongoose");

const registeredUserSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["student", "college admin"],
    required: true,
  },
  // Common
  collegeCode: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  // College Admin fields
  collegeName: {
    type: String,
    required: function () {
      return this.role === "college admin";
    },
  },
  affiliationNumber: {
    type: String,
    required: function () {
      return this.role === "college admin";
    },
  },
  location: {
    type: String,
    required: function () {
      return this.role === "college admin";
    },
  },
  logofile: {
    type: String,
    required: function () {
      return this.role === "college admin";
    },
  },

  // Student fields
  studentName: {
    type: String,
    required: function () {
      return this.role === "student";
    },
  },
  registerNumber: {
    type: String,
    required: function () {
      return this.role === "student";
    },
  },

  isApproved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("registeredUsers", registeredUserSchema);
