const express = require('express');
const Alumni = require('../models/Alumni');
const router = express.Router();

// Alumni signup
router.post('/signup', async (req, res) => {
  try {
    const { name, dob, branch, passedOutYear, password } = req.body;
    const alumni = new Alumni({ name, dob, branch, passedOutYear, password });
    await alumni.save();
    res.status(201).json({ message: 'Alumni registered successfully' });
  } catch (err) {
    console.error('Error during alumni signup:', err.message);
    res.status(500).json({ error: 'Error registering alumni' });
  }
});

// Alumni login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const alumni = await Alumni.findOne({ name: username, password });
    if (alumni) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error during alumni login:', err.message);
    res.status(500).json({ error: 'Error logging in alumni' });
  }
});

module.exports = router;
