// backend/models/Post.js
const mongoose = require('mongoose');

// Define the Post schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Post', postSchema);
