const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Add a new job
router.post('/', async (req, res) => {
  try {
    const { company, position, startDate, endDate, requirements } = req.body;
    const job = new Job({ company, position, startDate, endDate, requirements });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    console.error('Error adding job:', err);
    res.status(500).json({ error: 'Error adding job' });
  }
});

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ error: 'Error fetching jobs' });
  }
});

module.exports = router;
