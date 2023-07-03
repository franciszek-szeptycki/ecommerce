import React from "react";
import ContactForm from "./createUserForm.js";
import {
  FaRegEnvelope,
  FaUnlock,
  FaFacebookSquare,
  FaGoogle,
} from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";

export default function LoginForm() {
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
            <label htmlFor="email">{<FaRegEnvelope />} Email</label>
            <input className="form-item" name="email" id="email" type="email" />
            <label htmlFor="password">{<FaUnlock />} Password</label>
            <input
              className="form-item"
              name="password"
              id="password"
              type="password"
            />
            <button className="form-item" id="btn-form">
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
