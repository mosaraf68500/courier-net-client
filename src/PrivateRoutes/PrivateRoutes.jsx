import React from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContexHook from '../Hooks/AuthContexHook';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = AuthContexHook();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoutes;
