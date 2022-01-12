import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

function PrivateOutlet() {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="login" />;
}

export default PrivateOutlet;
