import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlumniHome from './components/AlumniHome';
import StudentHome from './components/StudentHome';
import JobPortal from './components/JobPortal';
import JobOffers from './components/JobOffers';


// Import individual components for alumni and student login and signup
import AlumniLogin from './components/AlumniLogin';
import StudentLogin from './components/StudentLogin';
import AlumniSignup from './components/AlumniSignup';
import StudentSignup from './components/StudentSignup';
import LandingPage from './components/LandingPage';

import AlumniProfile from "./components/AlumniProfile";
import DonationPortal from './components/DonationPortal';
import AdminHome from './components/AdminHome';
import DonationForm from './components/DonationForm';
import AdminSignup from "./components/AdminSignup";
import AdminLogin from "./components/AdminLogin";
import Webinars from './components/Webinars';
import AlumniSuccess from "./components/AlumniSuccessStory";
import StudentSuccess from "./components/StudentSuccessStory";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/api/admin/signup" element={<AdminSignup />} />
      <Route path="/api/admin/login" element={<AdminLogin />} />

      
      

        {/* Alumni Routes */}
        <Route path="/alumni/home" element={<AlumniHome />} />
        <Route path="/alumni/job-portal" element={<JobPortal />} />
        <Route path="/alumni/login" element={<AlumniLogin />} />
        <Route path="/alumni/signup" element={<AlumniSignup />} />
        <Route path="/alumni/profile" element={<AlumniProfile />} />
        <Route path="/alumni/donation-portal" element={<DonationPortal />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/alumni/donation-pay" element={<DonationForm />} />
        <Route path="/alumni/success" element={<AlumniSuccess />} />


        {/* Student Routes */}
        <Route path="/student/home" element={<StudentHome />} />
        <Route path="/student/job-offers" element={<JobOffers />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/student/webinars" element={<Webinars />} />

        <Route path="/student/success" element={<StudentSuccess />} />


        {/* Common Routes */}
        {/* Add any additional common routes or redirections if needed */}
      </Routes>
    </Router>
  );
};

export default App;
