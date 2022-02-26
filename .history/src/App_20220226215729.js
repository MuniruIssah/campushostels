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
function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<Landing />} exact path="/" />
        <Route element={<Home />} path="/hostels" />

        <Route element={<AdminMain />} path="/admin">
          
          <Route path="" element={<Navigate replace to="hostels" />} />
          <Route path="hostels" element={<AdminHostelsView />} />
          <Route path="campuses" element={<AdminCampusesView />} />
        </Route>
        <Route element={<Modal />} path="/test" />
      </Routes>
    </div>
  );
}

export default App;
