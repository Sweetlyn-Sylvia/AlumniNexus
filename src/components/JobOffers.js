import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobOffers.css';

function JobOffers() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobs(response.data);
      } catch (err) {
        console.error(err);
        alert('Error fetching job offers');
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="job-offers-container">
      <h2>Job Offers</h2>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h3 className="job-title">{job.company}</h3>
            <p><strong>Position:</strong> {job.position}</p>
            <p><strong>Start Date:</strong> {new Date(job.startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(job.endDate).toLocaleDateString()}</p>
            <p><strong>Requirements:</strong> {job.requirements}</p>
          </div>
        ))
      ) : (
        <p>No job offers available at the moment.</p>
      )}
    </div>
  );
}

export default JobOffers;
