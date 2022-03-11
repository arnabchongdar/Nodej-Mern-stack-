import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const dataSubmit = () => {
    fetch("http://localhost:9000/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        mobile: user.mobile,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    history.push("/");
  };
  return (
    <React.Fragment>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Register</h3>

        <label htmlFor="Name">Name</label>
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
        <label htmlFor="mobile">Mobile</label>
        <input
          type="number"
          name="mobile"
          value={user.mobile}
          placeholder="enter your mobile number"
          onChange={handleChange}
        />

        <button type="submit" onClick={dataSubmit}>
          Register
        </button>
      </form>
    </React.Fragment>
  );
}

export default Register;
