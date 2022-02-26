import React, { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import HashLoader from "react-spinners/HashLoader";
import { app } from "../firebase.config";

const db = getFirestore(app);

const AdminAuthContext = React.createContext();
export const useCampuses = () => useContext(AdminAuthContext);

consCampusesProvider = ({ children }) => {
  const [campuses, setCampuses] = useState([]);
  const [currentCampus, setCurrentCampus] = useState({});

  useEffect(() => {
    getCampuses(db);
  }, []);

  async function getCampuses(db) {
    const campusesCol = collection(db, "campuses");
    const campusesSnapshot = await getDocs(campusesCol);
    const campusesList = campusesSnapshot.docs.map((doc) => doc.data());
    console.log("campusesList", campusesList);
    setCampuses(campusesList);
    setCurrentCampus(campusesList[0]);
  }

  const switchCampuses = (name) => {
    console.log("i am here", name);
    let newCurrent = campuses.filter((campus) => campus.name === name);
    console.log({newCurrent})
    setCurrentCampus(newCurrent);
  };

  let values = {
    campuses,
    currentCampus,
    changeCampus: switchCampuses,
  };
  return (
    <AdminAuthContext.Provider value={values}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export defaulCampusesProvider;
