import React from "react";
import { useAuth } from "../../auth/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  console.log("muestra el user", user);

  if (!user) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
