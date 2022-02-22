import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useHostels } from "../contexts/HostelContext";
const Header = () => {
  const { search ,handleSearch } = useHostels();

  return (
    <div className="flex justify-between items-center px-6 h-16 shadow shadow-xl bg-blue-800">
      <h1 className="hidden md:block text-white text-xl font-bold">Campus Hostels</h1>
      <div className="w-full md:w-auto flex justify-start items-center space-x-4 bg-white/25 py-2 px-3 rounded rounded-lg">
        <AiOutlineFileSearch className="text-white/50" />
        <input
          type="text"
          value={search}
          onChange={(e)=>}
          className="outline-none caret-white/75 text-white placeholder:text-white/50 bg-transparent"
          placeholder="Search for hostels"
        />
      </div>
    </div>
  );
};

export default Header;
