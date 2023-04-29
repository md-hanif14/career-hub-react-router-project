import React from 'react';
import JobCatagory from '../JobCatagory/JobCatagory';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className='banner-container'>
                    <div>
                        <h1>One Step <br /> Closer To Your <br /> <span className='dream'>Dream Job</span></h1>
                    </div>
                    <div>
                        <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. <br /> Come find it. Manage all your job application from start to finish.</p>
                    </div>
                    <div>
                        <button className='btn'>Get started</button>
                    </div>
                </div>
                <div className='img-container'>
                    <img src="https://freepngimg.com/download/man/147234-standing-man-business-formal-free-png-hq.png" alt="" />
                </div>
            </div>
            <JobCatagory></JobCatagory>
        </div>
    );
};

export default Home;