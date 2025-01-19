const mongoose = require('mongoose');

const AlumniProfileSchema = new mongoose.Schema({
  alumniId: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumni', required: true },
  profession: { type: String, required: true },
  location: { type: String, required: true },
  linkedin: { type: String, required: true },
  bio: { type: String, required: true }
});

module.exports = mongoose.model('AlumniProfile', AlumniProfileSchema);
