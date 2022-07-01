import React from 'react';
import useAuth from '../hooks/useAuth';

import Loader from './Loader';
import { Navigate } from 'react-router-dom';
const RequireAuth = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading) {
        // console.log("Loading")
        return <Loader />
    }

    if (!user) {


        return <Navigate to="/login" />;



    }
    else {
        return children;

    }

};

export default RequireAuth;