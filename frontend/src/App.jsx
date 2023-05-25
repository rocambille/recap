import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/">Accueil</Link>
      <Link to="/home">Home</Link>
      <Link to="/register">Register</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <p>coucou</p>
    </div>
  );
}

export default App;
