// frontend/src/components/DonationPortal.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './DonationPortal.css';

const DonationPortal = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:5000/api/donations');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleDonate = (postTitle) => {
    alert(`You donated to: ${postTitle}`);
    navigate('/alumni/donation-pay'); // Navigate to the desired route
  };

  return (
    <div>
      <h2>Donation Portal</h2>
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="card">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>Amount Needed: Rs.{post.amount}</p>
              <button onClick={() => handleDonate(post.title)}>Donate</button>
            </div>
          ))
        ) : (
          <p>No posts available yet!</p>
        )}
      </div>
    </div>
  );
};

export default DonationPortal;
