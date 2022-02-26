import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { app } from "./firebase.config";
import Landing from "./pages/Landing";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminMain from "./pages/AdminMain";
import AdminHostelsView from "./components/AdminHostelsView";
import AdminCampusesView from "./components/AdminCampusesView";
import Modal from "./components/Modal";
import RequireAuth from "./utils/RequireAuth";
import AdminAuthProvider from "./contexts/AuthContext";
function App() {
  return (
    <div>
      <AdminAuthProvider>
      <Routes>
        <Route element={<Landing />} exact path="/" />
        <Route element={<Home />} path="/hostels" />
        <Route path="login" element={<AdminLogin />} />

        <Route element={<RequireAuth><AdminMain /></RequireAuth>} path="/admin">
          {/*  */}
          <Route path="" element={<Navigate replace to="hostels" />} />
          <Route
            path="hostels"
            element={
              <RequireAuth>
                <AdminHostelsView />
              </RequireAuth>
            }
          />
          <Route
            path="campuses"
            element={
              <RequireAuth>
                <AdminCampusesView />
              </RequireAuth>
            }
          />
          {/*  */}
        </Route>
        <Route element={<Modal />} path="/test" />
      </Routes>
      </AdminAuthProvider>
    </div>
  );
}

export default App;