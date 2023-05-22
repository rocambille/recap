import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/">Accueil</Link>
      <Link to="/home">Home</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <p>coucou</p>
    </div>
  );
}

export default App;
