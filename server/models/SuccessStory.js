const mongoose = require('mongoose');

const successStorySchema = new mongoose.Schema({
  alumniName: { type: String, required: true },
  batch: { type: String, required: true },
  title: { type: String, required: true },
  story: { type: String, required: true },
  achievements: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SuccessStory', successStorySchema);
