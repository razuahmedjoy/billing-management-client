import React from 'react';
import {Routes,Route} from 'react-router';
import Dashboard from '../pages/Dashboard';
const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
        </Routes>
    );
};

export default Body;