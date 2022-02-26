import React from "react";
import { Outlet ,Link} from "react-router-dom";

const AdminMain = () => {
  return (
    <div>
      Admin Main Page
      <nav>
        <Link to="">Invoices</Link> |{" "}
        <Link to="users">Users</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminMain;
