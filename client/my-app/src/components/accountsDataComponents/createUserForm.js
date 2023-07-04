import React, { useEffect, useState } from "react";
import LoginForm from "./loginForm";
import {
  FaRegEnvelope,
  FaUnlock,
  FaFacebookSquare,
  FaGoogle,
} from "react-icons/fa";

import { Link, Route, Routes } from "react-router-dom";

export default function ContactForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newPasswordComplite, setNewPasswordComplite] = useState("Password");
  const [newUsernameComplite, setNewUsernameComplite] = useState("Username");

  const CheckPassword = () => {
    if (password.length < 8) {
      setNewPasswordComplite("Password must be has min 8 tags");
    } else {
      setNewPasswordComplite("Password");
    }
  };

  const CheckName = () => {
    if (userName.length < 3) {
      setNewUsernameComplite("Your name must be min 3 tags !!!");
    } else {
      setNewUsernameComplite("Username");
    }
  };

  const CheckUser = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
    CheckPassword();
    CheckName();
  };

  const inputsHandler = (event) => {
    const target = event.target;
    let newValue = event.target.value;

    if (target.id === "email") {
      setUserName(newValue);
    } else if (target.id === "password") {
      setPassword(newValue);
    }
  };

  return (
    <>
      <div className="form-conatiner">
        <form className="form-box">
          <header>
            <h2>Create account</h2>
          </header>
          <section className="media-form">
            <button id="btn-facebook">
              <b>{<FaFacebookSquare fontSize={16} />}</b> Facebook
            </button>
            <button id="btn-google">
              <b>{<FaGoogle fontSize={14} />}</b> Google
            </button>
          </section>

          <div className={`inputs-box `}>
            <label htmlFor="email">
              {<FaRegEnvelope />}
              {newUsernameComplite}
            </label>
            <input
              value={userName}
              onChange={(e) => inputsHandler(e)}
              className="form-item"
              name="email"
              id="email"
            />
            <label htmlFor="password">
              {<FaUnlock />} {newPasswordComplite}
            </label>
            <input
              className="form-item"
              name="password"
              id="password"
              type="password"
              onChange={(e) => inputsHandler(e)}
              value={password}
            />
            <button
              onClick={(e) => CheckUser(e)}
              className="form-item"
              id="btn-form"
            >
              CREATE
            </button>

            <Link className="form-text" to="/login">
              <p className="form-text">Login to account</p>
            </Link>
          </div>
        </form>
      </div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}
