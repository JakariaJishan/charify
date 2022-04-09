import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = sessionStorage.getItem('accessToken');

    return (
        <div>
            {
                auth? <Outlet/>: <Navigate to="/login" replace/>
            }
        </div>
    );
};

export default PrivateRoute;