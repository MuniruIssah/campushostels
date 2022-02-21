import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import {app} from './firebase.config'
function App() {
  return (
    <div className="container">
      <Home />
    </div>
  );
}

export default App;
