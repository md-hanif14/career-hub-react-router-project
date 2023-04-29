import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <div>
                    <h1>Job Hub</h1>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/appliedJobs">Applied Job</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
                <div>
                    <button className='btn'>Start applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;