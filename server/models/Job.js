// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    requirements: { type: String, required: true },
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
