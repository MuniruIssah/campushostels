import React, { useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth();

const AdminAuthContext = React.createContext();
export const useAdminAuth = () => useContext(AdminAuthContext);

const AdminAuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const adminLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log('signed in')
        const user = userCredential.user;
        setUser(user);
        return user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error error ${errorMessage}`)

        return error;
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
