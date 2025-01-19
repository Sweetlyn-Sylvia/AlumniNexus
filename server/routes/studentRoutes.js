const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// Student signup
router.post('/signup', async (req, res) => {
  try {
    const { rollNumber, password } = req.body;
    const student = new Student({ rollNumber, password });
    await student.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error adding student' });
    console.log(err.message);
  }
});

// Student login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const student = await Student.findOne({ rollNumber: username, password });
    if (student) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error logging in student' });
  }
});

module.exports = router;
