import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { app } from "./firebase.config";
import Landing from "./pages/Landing";
import { Routes } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Routes>
    <Route element={<Landing />} exact path='/'/>
    <
      {/* <Home /> */}
      
      </Routes>
    </div>
  );
}

export default App;
