import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login/:userType" element={<Login />} />
          <Route exact path="/register/:userType" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
