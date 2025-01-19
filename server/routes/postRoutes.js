// backend/routes/postRoutes.js
const express = require('express');
const Post = require('../models/Posts'); // Import the Post model
const router = express.Router();

// Get all posts (webinars, campaigns)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new post (webinars, campaigns)
router.post('/', async (req, res) => {
  const { title, description, amount } = req.body;
  
  const newPost = new Post({
    title,
    description,
    amount,
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
