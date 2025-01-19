const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/alumniDB')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import routes
const alumniRoutes = require('./routes/alumniRoutes');
const studentRoutes = require('./routes/studentRoutes');
const jobRoutes = require('./routes/jobRoutes');

const donation=require("./routes/postRoutes");
const DonationRoutes=require("./routes/donation");
const adminRoutes = require("./routes/admin");
const successStoryRoutes = require('./routes/successStoryRoutes');

// Use routes
app.use('/api/alumni', alumniRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/jobs', jobRoutes);

app.use("/api/donations",donation);

app.use("/api/donation",DonationRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/success-stories', successStoryRoutes);


// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
