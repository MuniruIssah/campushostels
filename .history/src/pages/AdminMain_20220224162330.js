import React from "react";
import { Outlet, NavL, NavLink } from "react-router-dom";

const AdminMain = () => {
  return (
    <div className="w-screen">
      <div className="bg-gray-900 py-4 px-5 text-white font-bold ">Admin</div>
      <nav className="py-3 flex justify-center md:justify-start shadow-md px-5">
        <NavLink to="" className='py-2 px-4 hov' >Hostels</NavLink>
         <NavLink to="campuses">Campuses</NavLink>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminMain;
