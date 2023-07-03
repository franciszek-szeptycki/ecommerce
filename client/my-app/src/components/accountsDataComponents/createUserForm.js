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
  const [createAccountComplite, setAccountComplite] = useState(null);

  useEffect(() => {
    if (userName.length < 5 && password.length < 8) {
      setAccountComplite(false);
    } else {
      setAccountComplite(true);
    }
  }, [userName, password]);

  const CheckUser = (e) => {
    e.preventDefault()
    console.log(userName.length);
    if (userName.length > 5 && password.length > 8) {
      console.log("check user info complited");
      setAccountComplite(false)

    } else {
      setAccountComplite(true);
      console.log("check user info is not complited");
      
    }
    console.log(createAccountComplite)
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

          <div className={`inputs-box`}>
            <label
              className={`label-class ${
                createAccountComplite ? "text-complite" : "text-error"
              }`}
              htmlFor="email"
            >
              {<FaRegEnvelope />} Username
            </label>
            <input
              value={userName}
              onChange={(e) => HandlerValueName(e)}
              className="form-item"
              name="email"
              id="email"
              type="email"
            />
            <label className={`label-class ${createAccountComplite ? "text-complite" : "text-error"}`} htmlFor="password">{<FaUnlock />} Password</label>
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
