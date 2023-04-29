import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Data from '../Data/Data';
import Job from '../Job/Job';
import './JobCatagory.css'

const JobCatagory = () => {

    const [jobs, setJobs] = useState([]);

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('/jobData.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    useEffect(() => {
        fetch('/jobCatagory.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div className='job-container'>
            <h1>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='detail-container'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>

            <div className='feature-container'>
                <h3>Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='data-container'>
                {
                    datas.map(data => <Data
                        key={data.id}
                        data={data}
                    ></Data>)
                }
            </div>
        </div>
    );
};

export default JobCatagory;