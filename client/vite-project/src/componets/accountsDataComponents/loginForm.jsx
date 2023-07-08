import React, { useState } from "react";
import CreateUserAccountForm from "./createUserForm";
import "./styles/loginForm.css";
import {
  FaRegEnvelope,
  FaUnlock,
  FaFacebookSquare,
  FaGoogle,
} from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";

export default function LoginForm() {
  const [userAccountName, setUserAccountName] = useState("");
  const [userAccountPassword, setUserAccountPassword] = useState("");

  const CheckUser = async (e) => {
    e.preventDefault();
    console.log(userAccountPassword);
    console.log(userAccountName);
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
            <label htmlFor="name">{<FaRegEnvelope />} Username</label>
            <input
              onChange={(e) => setUserAccountName(e.target.value)}
              className="form-item"
              name="name"
              id="name"
              value={userAccountName}
            />
            <label htmlFor="password">{<FaUnlock />} Password</label>
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
      <Routes>
        <Route path="/register" element={<CreateUserAccountForm />}></Route>
      </Routes>
    </>
  );
}
