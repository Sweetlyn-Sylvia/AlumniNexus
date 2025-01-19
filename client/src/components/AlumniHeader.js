import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AlumniHeader.css'; // CSS file for styling

const AlumniHeader = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert('Logged out successfully');
        navigate('/');
    };

    return (
        <header className="alumni-header">
            <nav className="alumni-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/alumni/job-portal" className="nav-link">Job Portal</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/alumni/donation-portal" className='nav-link'>Donation Portal</Link>
                    </li>
                    <li>
                     <Link to="/alumni/success" className='nav-link'>Achievements</Link>
                    </li>
                    

                    
                    <li className="nav-item">
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AlumniHeader;
