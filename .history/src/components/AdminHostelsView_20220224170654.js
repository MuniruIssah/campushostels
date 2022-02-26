import React from "react";
import { useHostels } from "../contexts/HostelContext";
import { AiOutlinePlus } from "react-icons/ai";
const AdminHostelsView = () => {
  const { hostels } = useHostels();
  return (
    <div className="w-full h-full p-3 md:p-10 flex flex-col">
      <button className="p-2 md:p-3 text-white bg-indigo-700 rounded rounded-full shadow-md self-end">
        <AiOutlinePlus className="text-sm md:text-lg" />
      </button>
      <h1 className="text-xl font-bold md:text-3xl md:font-extrabold text-gray-800 py-3">
        Hostels
      </h1>
      {hostels.map((hostel, index) => (
        <HostelListItem key={index} {...hostel} />
      ))}
    </div>
  );
};

export default AdminHostelsView;

const HostelListItem = ({ name, description }) => {
  return <div className="w-full my-2 bg-white rounded p-2">{name}</div>;
};
