import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const AdminMain = () => {
  return (
    <div>
      Admin Main Page
      <Route path="/admin">
        <Route path="" element={<AdminHostelsView />} />
        <Route path="users" element={<AdminUsersView />} />
      </Route>
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
