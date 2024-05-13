import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  console.log(children);
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  } else {
    return <Navigate to="/Login"></Navigate>;
  }
  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
