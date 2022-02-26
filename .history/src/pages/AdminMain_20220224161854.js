import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminMain = () => {
  return (
    <div className='w-screen'>
        .h
      Admin Main Page
      <nav>
        <Link to="">Hostels</Link> | <Link to="campuses">Campuses</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminMain;
