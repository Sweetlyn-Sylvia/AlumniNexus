import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './AlumniSignup.css'; // Add custom CSS for styling

const AlumniSignup = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [passedOutYear, setPassedOutYear] = useState('');
  const [department, setDepartment] = useState([]);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleDepartmentChange = (e) => {
    const { value, checked } = e.target;
    setDepartment((prev) =>
      checked ? [...prev, value] : prev.filter((dep) => dep !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, dob, passedOutYear, department, password };

    try {
      await axios.post('http://localhost:5000/api/alumni/signup', formData);
      alert('Signup successful! Please log in.');
      navigate('/alumni/login'); // Redirect to the alumni login page
    } catch (error) {
      console.error(error);
      alert('Error during signup. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Alumni Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <label>Passed Out Year:</label>
        <input
          type="number"
          value={passedOutYear}
          onChange={(e) => setPassedOutYear(e.target.value)}
          required
        />

        <label>Department:</label>
        <div className="checkbox-group">
          {['CSE', 'IT', 'EEE', 'MECH', 'CIVIL'].map((dep) => (
            <label key={dep}>
              <input
                type="checkbox"
                value={dep}
                checked={department.includes(dep)}
                onChange={handleDepartmentChange}
              />
              {dep}
            </label>
          ))}
        </div>

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <div className="login-redirect">
        <p>Already have an account?</p>
        <Link to="/alumni/login">Go to Login</Link>
      </div>
    </div>
  );
};

export default AlumniSignup;
