import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import JobCatagory from '../JobCatagory/JobCatagory';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <JobCatagory></JobCatagory> */}
        </div>
    );
};

export default Main;