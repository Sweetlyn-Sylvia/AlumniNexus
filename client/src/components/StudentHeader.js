import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudentHeader.css';

const StudentHeader = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert('Logged out successfully');
        navigate('/');
    };

    return (
        <header className="student-header">
            <nav className="navbar">
                <div className="logo">
                    <h1>Student Portal</h1>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/student/job-offers" className="nav-link">
                            Job Offers
                        </Link>

                    </li>
                    <li>
                        <Link to="/student/webinars" className='nav-link'>Events</Link>
                    </li>
                    <li>
                        <Link to="/student/success" className='nav-link'>Motivations</Link>
                    </li>
                    
                    <li>
                        <button onClick={handleLogout} className="logout-button">
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default StudentHeader;
