import React from "react";
import { useHostels } from "../contexts/HostelContext";
const AdminHostelsView = () => {
  const { hostels } = useHostels();
  return (
    <div className="w-full h-full p-10 flex flex-col">
      <button className="px-3 py-2 text-white bg-indigo-700 rounded shadow-md self-end">
        Add Hostel
      </button>
      <h1 className="md:text-3xl md:font-extrabold text-gray-800 py-3">
        Hostels
      </h1>
    </div>
  );
};

export default AdminHostelsView;
