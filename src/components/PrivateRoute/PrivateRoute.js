import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivetRoute = (children, ...rest) => {
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  
    const location = useLocation();
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[])

    return (
        user ? <Outlet /> :
            <Navigate to="/auth" replace state={{ from: location }} />
    );
};

export default PrivetRoute;