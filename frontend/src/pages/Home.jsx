import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import logo from "../assets/logo.svg";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const [items, setItems] = useState([]);

  const { token } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/items", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React !</p>
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}

      <Counter />

      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </header>
  );
}
