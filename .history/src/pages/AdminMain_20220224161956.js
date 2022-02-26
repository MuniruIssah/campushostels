import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminMain = () => {
  return (
    <div className='w-screen'>
        <div className="bg-gray-900 py-3 px-2 text-white ">
            Admin
        </div>
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
