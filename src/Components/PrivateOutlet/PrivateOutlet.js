import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateOutlet() {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default PrivateOutlet;
