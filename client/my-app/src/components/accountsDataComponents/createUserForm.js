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

  const CheckUser = (e) => {
    e.preventDefault();
    if (password.length > 7) {
      setNewPasswordComplite("Password is correct");
    } else if (password.length < 7) {
      setNewPasswordComplite("Your password is too short");
    } else if (userName.length < 2) {
      setNewUsernameComplite("Your name must has be min 2 tags !");
    }
  };
  const HandlerValueName = (e) => {
    let newNameValue = e.target.value;

    setUserName(newNameValue);
  };

  const HandlerValuePassword = (e) => {
    let newPasswordValue = e.target.value;
    setPassword(newPasswordValue);
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
              {<FaRegEnvelope />} {newUsernameComplite}
            </label>
            <input
              value={userName}
              onChange={(e) => HandlerValueName(e)}
              className="form-item"
              name="email"
              id="email"
              type="email"
            />
            <label htmlFor="password">
              {<FaUnlock />} {newPasswordComplite}
            </label>
            <input
              className="form-item"
              name="password"
              id="password"
              type="password"
              onChange={(e) => HandlerValuePassword(e)}
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
