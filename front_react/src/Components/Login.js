import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
function Login() {
  const [a, setA] = useState();
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const fetchdata = async () => {
    const response = await fetch("http://localhost:9000/user/login");
    const entries = await response.json();
    setA(entries);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const dataSubmit = (e) => {
    e.preventDefault();
    const contains = a.find((person) =>
      person.email === user.email ? true : false
    );
    if (contains) {
      history.push({
        pathname: "/dashboard",
        state: { name: user.name },
      });
    } else {
      console.log("email not registered");
    }
  };
  return (
    <React.Fragment>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="enter your name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="enter your email"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="enter your password"
          onChange={handleChange}
        />

        <button type="submit" onClick={dataSubmit}>
          Log In
        </button>
        <Link to="/register"> Not yet Registered? Click here</Link>
      </form>
    </React.Fragment>
  );
}

export default Login;
