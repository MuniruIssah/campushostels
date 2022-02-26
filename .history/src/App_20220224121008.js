import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { app } from "./firebase.config";
import Landing from "./pages/Landing";
import { Routes ,Route} from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<Landing />} exact path="/" />
        <Route element={<Home />} path="/hostels" />
        <Route element={<AdminLogin />} path="/admi" />

      </Routes>
    </div>
  );
}

export default App;
