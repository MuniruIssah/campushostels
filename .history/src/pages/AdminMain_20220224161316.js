import React from "react";
import { Outlet } from "react-router-dom";

const AdminMain = () => {
  return (
    <div>
      Admin Main Page
      <nav>
        <Link to="invoices">Invoices</Link> |{" "}
        <Link to="dashboard">Dashboard</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminMain;
