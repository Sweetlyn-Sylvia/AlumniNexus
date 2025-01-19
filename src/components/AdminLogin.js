import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 // Import the same CSS file for styling


const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post("http://localhost:5000/api/admin/login", {
        username,
        password,
      });
      setMessage("Login Successful!");

      // Navigate to the admin home page after successful login
      navigate("/admin/home");
    } catch (err) {
      setMessage("Error: " + err.response.data.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
