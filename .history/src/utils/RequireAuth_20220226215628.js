import React from "react";
import { useAdminAuth } from "../contexts/AuthContext";

const RequireAuth = ({ children }) => {
  const { user } = useAdminAuth();
  let
  return <>{children}</>;
};

export default RequireAuth;
