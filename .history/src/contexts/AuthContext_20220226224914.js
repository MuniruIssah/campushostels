import React, { useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut,onAuthStateChanged  } from "firebase/auth";
const auth = getAuth();

const AdminAuthContext = React.createContext();
export const useAdminAuth = () => useContext(AdminAuthContext);

const AdminAuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
  
  }, []);
  const checkUserLoggedIn=()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser();
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
  }

  const adminLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log('signed in')
        const user = userCredential.user;
        console.log(user)
        setUser(user);
        return {status:200,message:'You have logged in successfully'};
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error error ${errorMessage}`)
        return {status:errorCode,message:errorMessage};
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
