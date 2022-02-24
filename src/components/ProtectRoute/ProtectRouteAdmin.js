import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRouteAdmin = ({ user, children }) => {
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return <div>{children ? children : <Outlet />}</div>;
};

export default ProtectRouteAdmin;
