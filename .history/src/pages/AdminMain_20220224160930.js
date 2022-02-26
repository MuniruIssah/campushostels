import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const AdminMain = () => {
  return (
    <div>
      Admin Main Page
      <Routes>
        <Route path="/admin">
          <Route path="" element={<AdminHostelsView />} />
          <Route path="users" element={<AdminUsersView />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminMain;

const AdminHostelsView = () => {
  return <div>Hostels View</div>;
};

const AdminUsersView = () => {
  return <div>Users View</div>;
};
