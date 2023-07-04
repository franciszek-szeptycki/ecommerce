import React, { useState } from "react";
import ContactForm from "./createUserForm.js";
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
        <form className="form-box">
          <header>
            <h2>Sign In With</h2>
          </header>
          <section className="media-form">
            <button id="btn-facebook">
              <b>{<FaFacebookSquare fontSize={16} />}</b> Facebook
            </button>
            <button id="btn-google">
              <b>{<FaGoogle fontSize={14} />}</b> Google
            </button>
          </section>

          <div className="inputs-box">
            <label htmlFor="email">{<FaRegEnvelope />} Username</label>
            <input
              onChange={(e) => setUserAccountName(e.target.value)}
              className="form-item"
              name="email"
              id="email"
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
            <Link className="form-text" to="/contact">
              <p className="form-text">Create account</p>
            </Link>
          </div>
        </form>
      </div>
      <Routes>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
    </>
  );
}
