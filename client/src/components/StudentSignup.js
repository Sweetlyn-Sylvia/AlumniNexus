import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './StudentSignup.css'; // Import the CSS file

function StudentSignup() {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { rollNumber, password };

    try {
      await axios.post('http://localhost:5000/api/student/signup', formData);
      alert('Student registered successfully');
      navigate('/student/login'); // Redirect to student login page
    } catch (err) {
      console.error(err);
      alert('Error during signup');
    }
  };

  return (
    <div className="signup-container">
      <h2>Student Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <div className="login-redirect">
        <p>Already have an account?</p>
        <Link to="/student/login" className="login-link">Go to Login</Link>
      </div>
    </div>
  );
}

export default StudentSignup;
