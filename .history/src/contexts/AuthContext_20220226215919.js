import React, { useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth();

const AdminAuthContext = React.createContext();
export const useAdminAuth = () => useContext(AdminAuthContext);

const AdminAuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const adminLogin = (email,password) => {
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
  };

  const adminLogout = () => {
    signOut(auth);
  };

  let values = {
    user,
    adminLogin,
    adminLogout,
  };
  return (
    <AdminAuthContext.Provider value={values}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
