const express = require('express');
const router = express.Router();
const SuccessStory = require('../models/SuccessStory');


router.post('/add', async (req, res) => {
  const { alumniName, batch, title, story, achievements } = req.body;

  try {
    const newStory = new SuccessStory({ alumniName, batch, title, story, achievements });
    await newStory.save();
    res.status(201).json({ message: 'Success story added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add success story', error });
  }
});


router.get('/', async (req, res) => {
  try {
    const successStories = await SuccessStory.find().sort({ createdAt: -1 });
    res.status(200).json(successStories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch success stories', error });
  }
});

module.exports = router;
