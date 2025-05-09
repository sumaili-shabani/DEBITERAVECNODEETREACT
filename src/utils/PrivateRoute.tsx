import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

interface Props {
    children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
    return isAuthenticated() ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
