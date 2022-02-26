import React, { useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const db = getFirestore(app);

const AdminAuthContext = React.createContext();
export const useAdminAuth = () => useContext(AdminAuthContext);

const AdminAuthProvider = ({ children }) => {

    const adminLogin=()=>{
        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
  return (
    <AdminAuthContext.Provider value={values}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
