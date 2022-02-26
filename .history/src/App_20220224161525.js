import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { app } from "./firebase.config";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminMain from "./pages/AdminMain";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<Landing />} exact path="/" />
        <Route element={<Home />} path="/hostels" />
        <Route element={<AdminLogin />} path="/login" />
        <Route element={<AdminMain />} path="/admin">
          <Route path="" element={<AdminHostelsView />} />
          <Route path="campuses" element={<AdminUsersView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const AdminHostelsView = () => {
  return <div>Hostels View</div>;
};

const AdminUsersView = () => {
  return <div>Ca View</div>;
};
