import React, { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import HashLoader from "react-spinners/HashLoader";
import { app } from "../firebase.config";

const db = getFirestore(app);

const Campus = React.createContext();
export const useHostels = () => useContext(Campus);

const CampusesProvider = ({ children }) => {
  const [hostels, setHostels] = useState([]);
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getHostels(db);
  }, []);

  useEffect(() => {
    if(hostels.length===0) return

    if (search.length === 0) {
      setFilteredHostels([...hostels])
    } else {
      let filtered=hostels.filter(({name})=>name.toLowerCase().includes(search.toLowerCase()))
      setFilteredHostels(filtered)
    }
  }, [search,hostels]);

  async function getHostels(db) {
    const hostelsCol = collection(db, "hostels");
    const hostelSnapshot = await getDocs(hostelsCol);
    const hostelList = hostelSnapshot.docs.map((doc) => doc.data());
    console.log("hostelList", hostelList);
    setHostels(hostelList);
    setFilteredHostels(hostelList)
  }
  let values = {
    hostels: filteredHostels,
    search,
    handleSearch: (searchTerm) => setSearch(searchTerm),
  };
  return (
    <Campus.Provider value={values}>
      {hostels.length === 0 ? <Loader /> : children}
    </Campus.Provider>
  );
};

export default CampusesProvider;

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <HashLoader color="navy" />
      <h1 className="text-indigo-800/[0.85] text-4xl font-extrabold my-6">
        Campus Hostels
      </h1>
    </div>
  );
};
