import React from "react";
import { useCampuses } from "../contexts/CampusContext";
const AdminCampusesView = () => {
  const { campuses } = useCampuses();
  return (
    <div className="w-full h-full p-3 md:p-10 flex flex-col">
       <button className="p-2 md:p-3 text-white bg-indigo-700 rounded rounded-full shadow-md self-end">
        <AiOutlinePlus className="text-sm md:text-lg" />
      </button>
      <h1 className="md:text-3xl md:font-extrabold text-gray-800 py-6 px-10">
        Campuses
      </h1>
    </div>
  );
};

export default AdminCampusesView;
