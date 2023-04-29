import React from 'react';
import './Job.css'

const Job = ({ job }) => {
    return (
        <div>
            <div className='info-container'>
                <img src={job.logo} alt="" />
                <p className='name'>{job.name}</p>
                <p>{job.jobsAvailable}+ Jobs Available</p>
            </div>
        </div>
    );
};

export default Job;