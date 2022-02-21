import React, { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import HashLoader from "react-spinners/HashLoader";


const firebaseConfig = {
  apiKey: "AIzaSyB4vPR-Q-WV82PEnnO3BQXOJDbG-ij07YY",
  authDomain: "campus-hostels.firebaseapp.com",
  projectId: "campus-hostels",
  storageBucket: "campus-hostels.appspot.com",
  messagingSenderId: "1060283354375",
  appId: "1:1060283354375:web:4d51655af15a73071849a2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const HostelsContext = React.createContext();
export const useHostels = () => useContext(HostelsContext);

const HostelsProvider = ({ children }) => {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    getHostels(db);
  }, []);

  async function getHostels(db) {
    const hostelsCol = collection(db, "hostels");
    const hostelSnapshot = await getDocs(hostelsCol);
    const hostelList = hostelSnapshot.docs.map((doc) => doc.data());
    console.log("hostelList", hostelList);
    setHostels(hostelList);
  }
  let values = {
    hostels,
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
    <div
    className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
       <HashLoader color="navy" />

    </div>
  );
};
