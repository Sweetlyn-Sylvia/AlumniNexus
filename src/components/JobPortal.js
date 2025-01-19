import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios';
import './JobPortal.css'; // Import CSS file for styling

function JobPortal() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      company,
      position,
      startDate,
      endDate,
      requirements,
    };

    try {
      await axios.post('http://localhost:5000/api/jobs', formData);
      alert('Job posted successfully');
      setCompany('');
      setPosition('');
      setStartDate('');
      setEndDate('');
      setRequirements('');
    } catch (err) {
      console.error(err);
      alert('Error posting job');
    }
  };

  return (
    <div className="job-portal">
      <h2 className="portal-title">Post a Job</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <label className="form-label">Company:</label>
        <input
          name="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="form-input"
        />

        <label className="form-label">Position:</label>
        <input
          name="position"
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="form-input"
        />

        <label className="form-label">Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="form-input"
        />

        <label className="form-label">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="form-input"
        />

        <label className="form-label">Requirements:</label>
        <textarea
          name="requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          className="form-textarea"
        ></textarea>

        <button type="submit" className="submit-button">Post Job</button>
      </form>
    </div>
  );
}

export default JobPortal;
