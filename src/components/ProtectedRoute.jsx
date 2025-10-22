import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../context/authStore";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();
  if (!user) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
