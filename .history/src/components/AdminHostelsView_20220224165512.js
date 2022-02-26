import React from "react";
import { useHostels } from "../contexts/HostelContext";
import {AiOutlinePlus} from 'react-icons/ai'
const AdminHostelsView = () => {
  const { hostels } = useHostels();
  return (
    <div className="w-full h-full p-3 md:p-10 flex flex-col">
      <button className="px-3 py-3 text-white bg-indigo-700 rounded rounded-full shadow-md self-end">
        <AiOutlinePlus/
      </button>
      <h1 className="text-xl font-bold md:text-3xl md:font-extrabold text-gray-800 py-3">
        Hostels
      </h1>
    </div>
  );
};

export default AdminHostelsView;
