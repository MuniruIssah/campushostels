import React from "react";
import { Routes,Route,useLocation } from "react-router-dom";

const AdminMain = () => {
  return (
    <div>
      <Routes>
          <Route path="/admin" element={<AdminHostelsView/>}/>
          <Route path="/admin/users" element={<AdminUsersView/>}/>
      </Routes>
    </div>
  );
};

export default AdminMain;


const AdminHostelsView=()=>{
    return (
        <div>Hostels View</div>
    )
}

const AdminUsersView=()=>{
    return (
        <div>Users View</div>
    )
}