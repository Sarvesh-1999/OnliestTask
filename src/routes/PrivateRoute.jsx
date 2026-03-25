import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let accessToken = sessionStorage.getItem("token");

  return accessToken ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
