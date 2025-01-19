import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';

function AlumniProfilePage() {
  const { alumniId } = useParams(); // Get alumniId from URL params
  const [profile, setProfile] = useState({
    name: '',
    department: '',
    year: '',
    profession: '',
    location: '',
    linkedin: '',
    bio: ''
  });
  const [isUpdated, setIsUpdated] = useState(false);


  // Fetch alumni profile on page load
  useEffect(() => {
    axios
      .get(`/api/profile/${alumniId}`)
      .then((res) => setProfile(res.data))
      .catch((err) => console.error('Error fetching profile:', err));
  }, [alumniId]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle profile submission (update profile)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/profile/${alumniId}`, profile)  // Use PUT instead of POST
      .then((res) => {
        setIsUpdated(true);
        alert('Profile updated successfully!');
      })
      .catch((err) => console.error('Error updating profile:', err));
  };

  return (
    <div>
      <h2>Update Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
        />
        <label>Department</label>
        <input
          type="text"
          name="department"
          value={profile.department}
          onChange={handleChange}
        />
        <label>Year</label>
        <input
          type="text"
          name="year"
          value={profile.year}
          onChange={handleChange}
        />
        <label>Profession</label>
        <input
          type="text"
          name="profession"
          value={profile.profession}
          onChange={handleChange}
        />
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={profile.location}
          onChange={handleChange}
        />
        <label>LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={profile.linkedin}
          onChange={handleChange}
        />
        <label>Bio</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
        />
        <button type="submit">Save Profile</button>
      </form>
      {isUpdated && <p>Your profile has been updated successfully.</p>}
    </div>
  );
}

export default AlumniProfilePage;
