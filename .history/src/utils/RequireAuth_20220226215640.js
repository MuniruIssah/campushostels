import React from "react";
import { useLocation } from "react-router-dom";
import { useAdminAuth } from "../contexts/AuthContext";

const RequireAuth = ({ children }) => {
  const { user } = useAdminAuth();
  let location =useLocation
  return <>{children}</>;
};

export default RequireAuth;
