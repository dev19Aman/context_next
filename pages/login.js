import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/userContext";

const Login = () => {
  const { logIn } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const onSubmit = (data) => {
  //     logIn(data.username);
  //     console.log("Form data", data);
  //   };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        // email: "eve.holt@reqres.in",
        // password: "cityslicka",
      }),
    });
    console.log(response);
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
    //   logIn(data.username);
    } else {
      alert("Login failed");
    }
  };
  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
