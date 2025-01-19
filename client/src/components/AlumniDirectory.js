import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AlumniDirectory() {
  const [profiles, setProfiles] = useState([]);

  // Fetch all alumni profiles on page load
  useEffect(() => {
    axios
      .get('/api/profile')
      .then((res) => setProfiles(res.data))
      .catch((err) => console.error('Error fetching profiles:', err));
  }, []);

  return (
    <div>
      <h2>Alumni Directory</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile._id}>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Department:</strong> {profile.department}</p>
            <p><strong>Year:</strong> {profile.year}</p>
            <p><strong>Profession:</strong> {profile.profession}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p><strong>Bio:</strong> {profile.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlumniDirectory;
