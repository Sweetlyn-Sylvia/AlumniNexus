import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate
import AlumniHeader from './AlumniHeader';
import './AlumniHome.css'; // Custom CSS for styling
import alum from "./alumni.jpg";

const AlumniHome = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  // Function to navigate to job portal
  const handleJobPortalClick = () => {
    navigate("/alumni/job-portal");  // Navigate to the job portal page
  };

  // Function to navigate to donation page
  const handleDonateClick = () => {
    navigate("/alumni/donation-portal");  // Navigate to the donation page
  };

  return (
    <div>
      <AlumniHeader />
      <div className="alumni-home-container">
        <h1 className="welcome-title">Welcome Back, Esteemed Alumni!</h1>
        <img
          src={alum} // Replace with a valid image URL
          alt="Alumni Community"
          className="alumni-image"
        />
        <p className="welcome-text">
          We’re thrilled to have you reconnect with your alma mater. Your contributions inspire and pave the way for future generations!
        </p>
        <h2 className="section-title">Explore What You Can Do:</h2>
        <ul className="alumni-points">
          <li><strong>Post Job Opportunities:</strong> Share career openings to uplift students' careers.</li>
          <li><strong>Stay Updated:</strong> Receive the latest news and updates from the college community.</li>
          <li><strong>Engage in Events:</strong> Join alumni-exclusive events, reunions, and webinars.</li>
          <li><strong>Reconnect and Network:</strong> Find and connect with fellow alumni worldwide.</li>
        </ul>

        <h2 className="section-title">Support the Future</h2>
        <p className="donation-text">
          Your generosity can help shape the future of the next generation of students. Consider contributing to the Alumni Fund to support scholarships, campus development, and student activities.
        </p>
        <div className="donation-cta">
          <button className="cta-button" onClick={handleDonateClick}>Donate Now</button> {/* Button to navigate to donation page */}
        </div>

        <div className="cta-section">
          <p>Let’s build a thriving and connected alumni network. Together, we create endless possibilities!</p>
          <button className="cta-button" onClick={handleJobPortalClick}>Visit the Job Portal</button> {/* Button to navigate to job portal */}
        </div>
      </div>
    </div>
  );
};

export default AlumniHome;
