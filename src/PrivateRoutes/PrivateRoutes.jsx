import React from 'react';
import AuthContexHook from '../Hooks/AuthContexHook';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user,loading}=AuthContexHook();

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    return children
};

export default PrivateRoutes;