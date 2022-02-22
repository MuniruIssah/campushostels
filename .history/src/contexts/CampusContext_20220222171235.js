import React, { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import HashLoader from "react-spinners/HashLoader";
import { app } from "../firebase.config";

const db = getFirestore(app);

const CampusesContext = React.createContext();
export const useCampuses = () => useContext(CampusesContext);

const CampusesProvider = ({ children }) => {
  const [campuses, setCampuses] = useState([]);


  useEffect(() => {
    getCampuses(db);
  }, []);


  async function getCampuses(db) {
    const campusesCol = collection(db, "campuses");
    const campusesnapshot = await getDocs(campusesCol);
    const hostelList = campusesnapshot.docs.map((doc) => doc.data());
    console.log("hostelList", hostelList);
    setCampuses(hostelList);
  }
  let values = {
    campuses,
  };
  return (
    <CampusesContext.Provider value={values}>
      {campuses.length === 0 ? <Loader /> : children}
    </CampusesContext.Provider>
  );
};

export default CampusesProvider;

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <HashLoader color="navy" />
      <h1 className="text-indigo-800/[0.85] text-4xl font-extrabold my-6">
        Campus campuses
      </h1>
    </div>
  );
};
