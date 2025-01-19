const mongoose = require('mongoose');

const AlumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  passedOutYear: { type: Number, required: true },
  department: { type: [String], required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Alumni', AlumniSchema);
