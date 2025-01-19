import React, { useEffect, useState } from 'react';

const Webinars = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:5000/api/donations');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <h2>Events</h2>
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="card">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              </div>
          ))
        ) : (
          <p>No posts available yet!</p>
        )}
      </div>
    </div>
  );
};

export default Webinars;
