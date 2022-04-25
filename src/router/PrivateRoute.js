import { Navigate, Outlet } from "react-router";
import React from "react";
const useAuth = () => {
  const loggedIn = localStorage.getItem("user");
  return loggedIn != null ? true : true;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
