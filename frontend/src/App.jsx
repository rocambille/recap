import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { token, setToken } = useAuth();

  return (
    <div className="App">
      <Link to="/">Accueil</Link>
      <Link to="/home">Home</Link>
      {token == null ? (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <button type="button" onClick={() => setToken(null)}>
          Logout
        </button>
      )}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <p>coucou</p>
    </div>
  );
}

export default App;
