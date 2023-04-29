import React from 'react';
import './ViewDetails.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarIcon, PhoneIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/solid'


const ViewDetails = () => {

    const [alreadyApplied, setAlreadyApplied] = useState(false);

    const { jobId } = useParams();
    const [singleJob, setSinglejob] = useState({})
    useEffect(() => {
        const appliedJobs = JSON.parse(localStorage.getItem("applied-jobs"));
        if (appliedJobs != null) {
            const ifExist = appliedJobs.find((data) => data.id == jobId);
            if (ifExist) {
                setAlreadyApplied(true);
            }
        }
        fetch('/jobData.json')
            .then(res => res.json())
            .then(data => {
                const getSinglejob = data.find((data) => data.id == jobId)
                setSinglejob(getSinglejob);
            }
            )
    }, [])

    const applyJob = () => {

        const appliedJobs = localStorage.getItem("applied-jobs");

        if (appliedJobs == null) {
            localStorage.setItem("applied-jobs", JSON.stringify([singleJob]));
        } else {
            const existingApplied = JSON.parse(localStorage.getItem("applied-jobs"));
            existingApplied.push(singleJob);
            localStorage.setItem("applied-jobs", JSON.stringify(existingApplied));
        }
        setAlreadyApplied(true);
    }
    return (
        <div className='job-info-container'>
            <div className='job-header'>
                <h2>Job Details</h2>
            </div>

            <div className='job-details-container'>
                <div className='description'>
                    <p><b> Job Description:</b>{singleJob?.job_description}</p>
                    <p><b>Job Responsibility:</b>{singleJob?.job_responsibility}</p>
                    <p><b>Educational Requirements:</b><br />{singleJob?.educational_requirements}</p>
                    <p><b>Experiences:</b><br />{singleJob?.experiences}</p>
                </div>
                
                <div className='details-container'>
                    <h3>Job Details <ul></ul></h3>
                    <p><CurrencyDollarIcon className="h-6 w-6 text-blue-500 icon" /><b>Salary:</b>{singleJob?.salary}</p>
                    <p><CalendarIcon className="h-6 w-6 text-blue-500 icon" /><b>Job Title :</b>{singleJob?.job_title}</p>
                    <h3>Contact Information</h3>
                    <p><PhoneIcon className="h-6 w-6 text-blue-500 icon" /><b>Phone:</b>{singleJob?.phone}</p>
                    <p><EnvelopeIcon className="h-6 w-6 text-blue-500 icon" /><b>Email:</b>{singleJob?.email}</p>
                    <p><MapIcon className="h-6 w-6 text-blue-500 icon" /><b>Address:</b>{singleJob?.location}</p>
                    {alreadyApplied ? <button className='btn-applied' disable>Applied</button> : <button onClick={() => applyJob()} className='btn'>Apply Now</button>}
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;