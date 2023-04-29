import React from 'react';
import { MapIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import './Data.css'
import { Link } from 'react-router-dom';

const Data = ({ data }) => {

    return (
        <div className='data'>
            <img src={data.company_logo} alt="" />
            <h3>{data.job_title}</h3>
            <p>{data.company_name}</p>
            <div className='job-type'>
                <button className='btn-data'>{data.remote_or_onsite}</button>
                <button className='btn-data'>{data.fulltime_parttime}</button>
            </div>
            <div className='job-location'>
                <p><MapIcon className="h-6 w-6 text-blue-500 icon" />{data.location}</p>
                <p><CurrencyDollarIcon className="h-6 w-6 text-blue-500 icon" /> Salary: {data.salary}</p>
            </div>
            <Link to={`/viewD/${data.id}`}><button className='btn'>View details</button></Link>
        </div>
    );
};

export default Data;