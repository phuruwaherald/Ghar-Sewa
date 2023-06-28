import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { role } from "../constants";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: role[0],
  });

  // Handle Input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  // Handle Login
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, role } = user;
    try {
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
        role,
      });

      if (res.status === 400 || !res) {
        window.alert(res.statusText);
      } else {
        window.location.assign("/");
        localStorage.setItem("user", JSON.stringify(res.data));
        window.alert("Login Successful");
      }
    } catch (error) {
      window.alert(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">Enter Your Credentials to Login</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                {/* <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Role
                </label>
                <select
                  className="form-select"
                  onChange={(e) => setUser({ role: e.target.value })}
                >
                  {role.map((value) => {
                    return <option>{value}</option>;
                  })}
                </select>
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-primary w-100 mt-4 rounded-pill"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
