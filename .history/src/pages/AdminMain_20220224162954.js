import React from "react";
import { Outlet, NavL, NavLink } from "react-router-dom";

const AdminMain = () => {
  return (
    <div className="w-screen">
      <div className="bg-gray-900 py-4 px-5 text-white font-bold ">Admin</div>
      <nav className="py-3 flex justify-center md:justify-start shadow-md px-5 space-x-4">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "py-2 px-4 font-semibold rounded rounded-full bg-indigo-700 text-white"
              : "py-2 px-4 font-semibold text-gray-800 rounded rounded-full hover:bg-indigo-700 hover:text-white"
          }
        >
          Hostels
        </NavLink>
        <NavLink
          to="campuses"
          className={({ isActive }) =>
            isActive
              ? "py-2 px-4 font-semibold rounded rounded-full bg-indigo-700 text-white"
              : "py-2 px-4 font-semibold text-gray-800 rounded rounded-full hover:bg-indigo-700 hover:text-white"
          }
        >
          Campuses
        </NavLink>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminMain;
