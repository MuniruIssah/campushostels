import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { app } from "./firebase.config";
import Landing from "./pages/Landing";
function App() {
  return (
    <div className="container">
      
      {/* <Home /> */}
      <Landing />
    </div>
  );
}

export default App;
