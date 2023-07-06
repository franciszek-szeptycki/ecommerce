import React, { useEffect, useState } from "react";
import LoginForm from "./loginForm";

import { auth } from "../privateRoutes.jsx";
import {
  FaRegEnvelope,
  FaUnlock,
  FaFacebookSquare,
  FaGoogle,
} from "react-icons/fa";

import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const createNewAccount = () => {
    auth.token = true;
    navigate("/appLayout");
  };

  const CheckUser = (e) => {
    e.preventDefault();

    if (userName.length > 2 && password.length > 7) {
      createNewAccount();
    } else {
      alert("Your name or password is to short !");
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
              <b>{<FaFacebookSquare fontSize={16}/>}</b>


              Facebook
            </button>
            <button id="btn-google">
              <b>{<FaGoogle fontSize={16}/>}</b>
               Google
            </button>
          </section>

          <div className={`inputs-box `}>
            <label htmlFor="email">
              {<FaRegEnvelope/>}
              Username
            </label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-item"
              name="email"
              id="email"
            />
            <label htmlFor="password">{<FaUnlock/>} Password</label>
            <input
              className="form-item"
              name="password"
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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
