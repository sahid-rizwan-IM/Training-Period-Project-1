const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema({
  email: String,
  passcode: String
}, { collection: 'superAdmin' });

const superAdminModel = mongoose.model("superAdmin", superAdminSchema);
module.exports = superAdminModel;
