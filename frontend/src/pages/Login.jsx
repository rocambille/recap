import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { setToken } = useAuth();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/login`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              username: usernameRef.current.value,
              password: passwordRef.current.value,
            }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setToken(data.token);

            navigate("/");
          });
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input ref={usernameRef} type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button type="submit">Go</button>
    </form>
  );
}

export default Login;
