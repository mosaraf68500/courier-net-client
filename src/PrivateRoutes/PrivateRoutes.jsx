import React from 'react';
import { Navigate } from 'react-router'; // ✅ যদি আপনি React Router v6+ ব্যবহার করেন
import AuthContexHook from '../Hooks/AuthContexHook';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = AuthContexHook();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoutes;
