import React from 'react';
import { Routes, Route } from 'react-router';
import Dashboard from '../pages/Dashboard';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient()

const Body = () => {
    return (
        <Routes>
            <Route path="/" element={
                <QueryClientProvider client={queryClient}>
                    <Dashboard />
                </QueryClientProvider>
            }></Route>

        </Routes>
    );
};

export default Body;