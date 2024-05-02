import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
  console.log(props);
  if (localStorage.getItem('user') === null) {
    return <Navigate to='/AmmaChethiMudha' />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
