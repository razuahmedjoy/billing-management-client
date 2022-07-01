import React from 'react';
import { Routes, Route } from 'react-router';
import Dashboard from '../pages/Dashboard';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RequireAuth from './RequireAuth';

const queryClient = new QueryClient()

const Body = () => {
    return (
        <Routes>
            <Route path="/" element={
                <QueryClientProvider client={queryClient}>
                    <RequireAuth>

                        <Dashboard />
                    </RequireAuth>
                </QueryClientProvider>
            }></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

        </Routes>
    );
};

export default Body;