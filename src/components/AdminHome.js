import React, { useState } from 'react';
import './AdminHome.css';

const AdminHome = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handlePost = async () => {
    const postData = { title, description, amount };

    try {
      const response = await fetch('http://localhost:5000/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        setMessage('Post added successfully!');
        setTitle('');
        setDescription('');
        setAmount('');
      } else {
        setMessage('Failed to post!');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      setMessage('Error posting data');
    }
  };

  return (
    <div className="admin-home-container">
      <h2 className="admin-home-header">Admin Dashboard</h2>
      <h3 className="form-subtitle">Post Webinars or Campaigns</h3>
      <p className="instructions">
        Use this form to create and manage donation campaigns or webinars. Fill in the details below to get started.
      </p>
      
      <form className="admin-form">
        <div className="input-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>

        <div className="input-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter detailed description"
          />
        </div>

        <div className="input-group">
          <label>Amount Needed</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <button type="button" onClick={handlePost} className="post-button">
          Post
        </button>
        
        {message && <p className="status-message">{message}</p>}
      </form>
    </div>
  );
};

export default AdminHome;
