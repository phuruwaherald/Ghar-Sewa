import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import { role } from "../constants";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    role: role[0],
    services: "",
  });

  // Handle Inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variable
    const { username, email, phone, password, role, services } = user;
    try {
      const res = await fetch("http://localhost:3002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          phone,
          password,
          role,
          services,
        }),
      });
      window.alert("Registered Successfully");
      navigate("/login");
    } catch (error) {
      window.alert(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Hello!</h1>
            <p className="lead text-center">Enter Your Details to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name "
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
                {/* <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
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
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPhone1" class="form-label">
                  Phone number
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleInputPhone1"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                />
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
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputRole1" class="form-label">
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
              <div class="mb-3">
                <label for="exampleInputServices1" class="form-label">
                  Services
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputServices"
                  rows="3"
                  name="services"
                  value={user.services}
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I Agree Terms and Condtions
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-outline-primary w-100 mt-4 rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
