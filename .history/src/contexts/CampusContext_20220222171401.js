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
    const campusesSnapshot = await getDocs(campusesCol);
    const hostelList = campusesSnapshot.docs.map((doc) => doc.data());
    console.log("hostelList", hostelList);
    setCampuses(hostelList);
  }
  let values = {
    campuses,
  };
  return (
    <CampusesContext.Provider value={values}>
      {campuses.length === 0 ? "": children}
    </CampusesContext.Provider>
  );
};

export default CampusesProvider;


