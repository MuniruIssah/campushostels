import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminMain = () => {
  return (
    <div className='w-screen'>
        .h-6.bg-gray-900
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
