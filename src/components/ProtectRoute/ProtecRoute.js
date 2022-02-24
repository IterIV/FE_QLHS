import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtecRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <div>{children ? children : <Outlet />}</div>;
};

export default ProtecRoute;
