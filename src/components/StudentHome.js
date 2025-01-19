import React from 'react';
import StudentHeader from './StudentHeader';
import './StudentHome.css';
import job from "./job.jpg";
import carrer from "./career.jpg"

const StudentHome = () => {
  return (
    <div className="student-home">
      <StudentHeader />
      <div className="welcome-section">
        <h1>Welcome, Student!</h1>
        <p className="welcome-text">Explore the latest job opportunities and build your career path with help from our alumni network.</p>
      </div>

      <div className="features-section">
        <h2>What You Can Do:</h2>
        <div className="features-list">
          <div className="feature">
            <img src={job} alt="Job Search" className="feature-image" />
            <h3>Browse Job Offers</h3>
            <p>Check out jobs posted by alumni tailored for recent graduates and students.</p>
          </div>
          <div className="feature">
            <img src={carrer} alt="Career Growth" className="feature-image" />
            <h3>Plan Your Career</h3>
            <p>Get advice and guidance on career planning from experienced professionals.</p>
          </div>
          <div className="feature">
            <img src={job} alt="Career Growth" className="feature-image" />
            <h3>Webinars and Campaigns</h3>
            <p>Get advice and guidance on career planning from experienced professionals.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentHome;
