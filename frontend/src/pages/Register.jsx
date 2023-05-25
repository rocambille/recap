import { useRef } from "react";

function Register() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/users`,
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
        );
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

export default Register;
