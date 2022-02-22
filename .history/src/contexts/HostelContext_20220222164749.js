import React, { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import HashLoader from "react-spinners/HashLoader";
import { app } from "../firebase.config";

const db = getFirestore(app);

const HostelsContext = React.createContext();
export const useHostels = () => useContext(HostelsContext);

const HostelsProvider = ({ children }) => {
  const [hostels, setHostels] = useState([]);
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getHostels(db);
  }, []);

  useEffect(() => {
    if(hostels.length=)
    if (search.length > 0) {
      setFilteredHostels([...hostels])
    } else {

    }
  }, [search,hostels]);

  async function getHostels(db) {
    const hostelsCol = collection(db, "hostels");
    const hostelSnapshot = await getDocs(hostelsCol);
    const hostelList = hostelSnapshot.docs.map((doc) => doc.data());
    console.log("hostelList", hostelList);
    setHostels(hostelList);
  }
  let values = {
    hostels: filteredHostels,
    handleSearch: (searchTerm) => setSearch(searchTerm),
  };
  return (
    <HostelsContext.Provider value={values}>
      {hostels.length === 0 ? <Loader /> : children}
    </HostelsContext.Provider>
  );
};

export default HostelsProvider;

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <HashLoader color="navy" />
    </div>
  );
};
