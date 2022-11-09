import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivetRoute = (children, ...rest) => {
    const [navigate, setNavigate] = useState(false)

    const user = useSelector(state => state.auth.authData);
    const location = useLocation();

    //why this setTimeout?
    // because when reload the favlist page, it navigated us to "/auth" (though user logged in) , in that case we need wait at least half second to get our user from authStateChanged
    setTimeout(() => {
        setNavigate(true)
    }, 900);

    return (
        user ? <Outlet /> :
            navigate && <Navigate to="/auth" replace state={{ from: location }} />
    );
};

export default PrivetRoute;