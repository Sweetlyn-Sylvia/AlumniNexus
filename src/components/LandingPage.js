import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import kam from "./kamaraj.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleAlumniClick = () => {
    navigate("/alumni/signup");
  };

  const handleStudentClick = () => {
    navigate("/student/signup");
  };

  const handleAdminClick = () => {
    navigate("/api/admin/signup");
  };

  return (
    <div className="landing-page">
      <div className="slogan-container">
        <h1>Welcome to the Connect Alumni Nexus Platform!</h1>
        <p>
          "Building Bridges Between the Past and the Future – Empowering
          Students, Alumni, and Administrators to Achieve Together."
        </p>
      </div>

      <div className="image-container">
        <img
          src={kam} // Replace with an actual banner or placeholder image URL
          alt="Platform Banner"
          className="banner-image"
        />
      </div>

      <div className="details-container">
        <p>
          Join a thriving community of alumni, students, and administrators. 
          Stay connected, inspire change, and make an impact today.
        </p>
      </div>

      <div className="logo-container">
        <div className="logo-item" onClick={handleAlumniClick}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygtIA8EWtpr7k4RRxP5AMv-2pE98mjEfSlg&s" 
            alt="Alumni Logo"
            className="logo"
          />
          <h2>Alumni</h2>
        </div>
        <div className="logo-item" onClick={handleStudentClick}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uAEXIH4LgeJYvUPMJDR_kmYIynu0GKl3Uw&s"
            alt="Student Logo"
            className="logo"
          />
          <h2>Student</h2>
        </div>
        <div className="logo-item" onClick={handleAdminClick}>
          <img
            src="https://thumbs.dreamstime.com/b/wooden-cubes-word-admin-stand-background-magnifying-glass-handle-205356871.jpg"
            alt="Admin Logo"
            className="logo"
          />
          <h2>Admin</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
