import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AlumniSuccessStory = () => {
  const [alumniName, setAlumniName] = useState('');
  const [batch, setBatch] = useState('');
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [achievements, setAchievements] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/success-stories/add', {
        alumniName,
        batch,
        title,
        story,
        achievements,
      });
      setMessage(response.data.message);
      setAlumniName('');
      setBatch('');
      setTitle('');
      setStory('');
      setAchievements('');
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Share Your Success Story</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label htmlFor="alumniName" className="form-label">Your Name</label>
              <input
                type="text"
                id="alumniName"
                className="form-control"
                placeholder="Your Name"
                value={alumniName}
                onChange={(e) => setAlumniName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="batch" className="form-label">Batch</label>
              <input
                type="text"
                id="batch"
                className="form-control"
                placeholder="Batch (e.g., 2015-2019)"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title of Your Story</label>
              <input
                type="text"
                id="title"
                className="form-control"
                placeholder="Title of Your Story"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="story" className="form-label">Your Success Story</label>
              <textarea
                id="story"
                className="form-control"
                rows="4"
                placeholder="Your Success Story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="achievements" className="form-label">Your Achievements</label>
              <textarea
                id="achievements"
                className="form-control"
                rows="3"
                placeholder="Your Achievements"
                value={achievements}
                onChange={(e) => setAchievements(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Submit Story</button>
            </div>
          </form>
          {message && <p className={`mt-3 text-center ${message.startsWith('Error') ? 'text-danger' : 'text-success'}`}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default AlumniSuccessStory;
