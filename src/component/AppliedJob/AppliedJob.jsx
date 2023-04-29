import React from 'react';
import { MapIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import './AppliedJob.css'

const AppliedJob = ({ appliedJob }) => {
    return (
        <div className='applied-jobData'>
            <div className='contain'>
                <img src={appliedJob.company_logo} alt="" />
                <div>
                    <h3>{appliedJob.job_title}</h3>
                    <p>{appliedJob.company_name}</p>
                    <div className='job-type'>
                        <button className='btn-data'>{appliedJob.remote_or_onsite}</button>
                        <button className='btn-data'>{appliedJob.fulltime_parttime}</button>
                    </div>
                    <div className='job-location'>
                        <p><MapIcon className="h-6 w-6 text-blue-500 icon" />{appliedJob.location}</p>
                        <p><CurrencyDollarIcon className="h-6 w-6 text-blue-500 icon" /> Salary: {appliedJob.salary}</p>
                    </div>
                </div>
            </div>
            <Link to={`/viewD/${appliedJob.id}`}><button className='btn'>View details</button></Link>
        </div>
    );
};

export default AppliedJob;