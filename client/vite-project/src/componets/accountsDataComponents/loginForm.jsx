import React, { useState } from "react";

import "./styles/loginForm.css";
import {
  FaRegEnvelope,
  FaUnlock,
  FaFacebookSquare,
  FaGoogle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  const [userAccountName, setUserAccountName] = useState("");
  const [userAccountPassword, setUserAccountPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const CheckUser = (e) => {
    e.preventDefault();
    console.log(userAccountPassword);
    console.log(userAccountName);
    axios
      .post("/auth/login/", {
        username: userAccountName,
        password: userAccountPassword,
      })
      .then((res) => {
        localStorage.setItem("Account Token", `${res.data.token}`);
        navigate("/appLayout");
        console.log(res);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          console.log("test");
          setLoginError(true);
        }
      });
  };

  return (
    <>
      <div className="form-conatiner">
        <form className="form-box" onSubmit={CheckUser}>
          <header>
            <h2>Sign In </h2>
          </header>
          <section className="media-form">
            <button id="btn-facebook">
              <b>{<FaFacebookSquare />}</b>
              Facebook
            </button>
            <button id="btn-google">
              <b>{<FaGoogle />}</b>
              Google
            </button>
          </section>

          <div className="inputs-box">
            <label style={{ color: loginError ? "red" : "" }} htmlFor="name">
              {<FaRegEnvelope />} Username
            </label>
            <input
              onChange={(e) => setUserAccountName(e.target.value)}
              className="form-item"
              name="name"
              id="name"
              value={userAccountName}
            />
            <label
              style={{ color: loginError ? "red" : "" }}
              htmlFor="password"
            >
              {<FaUnlock />} Password
            </label>
            <input
              className="form-item"
              name="password"
              id="password"
              value={userAccountPassword}
              onChange={(e) => setUserAccountPassword(e.target.value)}
              type="password"
            />
            <button
              onClick={(e) => CheckUser(e)}
              className="form-item"
              id="btn-form"
            >
              LOGIN
            </button>
            <Link className="form-text" to="/register">
              <p className="form-text">Create account</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
