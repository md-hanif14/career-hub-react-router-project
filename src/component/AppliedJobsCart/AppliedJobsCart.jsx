import React from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobsCart = () => {
   
    const appliedJobs = JSON.parse(localStorage.getItem("applied-jobs"))

    return (
        <div>
            {
                appliedJobs?.map(appliedJob => <AppliedJob
                    appliedJob={appliedJob}
                ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobsCart;