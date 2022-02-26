import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import CampusesProvider from "../contexts/CampusContext";
import HostelsProvider from "../contexts/HostelContext";
import chlogo from "../assets/ch.svg";
import { useAdminAuth } from "../contexts/AuthContext";
const AdminMain = () => {
  const {admin}=useAdminAuth()
  return (
    <div className="w-screen h-screen bg-gray-200">
      <HostelsProvider>
        <CampusesProvider>
          <div className="w-full h-full flex flex-col">
            <div className="flex justify-between items-center bg-gray-900 py-4 px-5 text-white font-bold ">
              <Link to="/">
                <img className="h-6 w-auto sm:h-8" src={chlogo} />
              </Link>
              <button className="text-white py-1 px-3 bg-red-600 rounded rounded-lg" >
                Logout
              </button>
            </div>
            <nav className="py-3 flex justify-center md:justify-start shadow-md px-5 space-x-4 bg-white">
              <NavLink
                to="hostels"
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-4 font-semibold rounded rounded-lg bg-indigo-200 text-indigo-700"
                    : "py-2 px-4 font-semibold text-gray-800 rounded rounded-lg hover:bg-indigo-200 hover:text-indigo-700"
                }
              >
                Hostels
              </NavLink>
              <NavLink
                to="campuses"
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-4 font-semibold rounded rounded-lg bg-indigo-200 text-indigo-700"
                    : "py-2 px-4 font-semibold text-gray-800 rounded rounded-lg hover:bg-indigo-200 hover:text-indigo-700"
                }
              >
                Campuses
              </NavLink>
            </nav>

            <div className="w-full h-full">
              <Outlet />
            </div>
          </div>
        </CampusesProvider>
      </HostelsProvider>
    </div>
  );
};

export default AdminMain;
