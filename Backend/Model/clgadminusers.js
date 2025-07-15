const mongoose = require('mongoose');

const adminUsersSchema = new mongoose.Schema({
  collegeCode: Number,
  collegeName: String,
  email: String,
  password: String,
  logofile: String
}, { collection: 'regsiteredCollegeAdmins'});

const adminUsersModel = mongoose.model("regsiteredCollegeAdmins", adminUsersSchema);
module.exports = adminUsersModel;
