import React, { useState } from "react";

import "./styles/createForm.css";

import {
  FaRegEnvelope,
  FaUnlock,
  FaFacebookSquare,
  FaGoogle,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateUserAccountForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [accountCreatedErr, setAccountCreatedErr] = useState(false);

  const navigate = useNavigate();

  const createNewAccount = () => {
    localStorage.setItem("User name", `${userName}`);

    axios
      .post("/auth/register/", {
        username: userName,
        password: password,
        email: email,
      })
      .then((res) => {
        localStorage.setItem("Account Token", `${res.data.token}`);
        navigate("/appLayout");
        console.log(res);
      })
      .catch((error) => {
        if (error.response.status === 401 || 405) {
          setAccountCreatedErr(true);
        }
      });
  };

  const CheckUser = (e) => {
    e.preventDefault();

    if (userName.length > 2 && password.length > 7 && email.length > 4) {
      createNewAccount();
    } else {
      setAccountCreatedErr(true);
    }
  };

  return (
    <>
      <div className="form-conatiner">
        <form className="form-box-create" onSubmit={CheckUser}>
          <header>
            <h2>Create account</h2>
          </header>
          <section className="media-form">
            <button id="btn-facebook">
              <b>{<FaFacebookSquare fontSize={16} />}</b>
              Facebook
            </button>
            <button id="btn-google">
              <b>{<FaGoogle fontSize={16} />}</b>
              Google
            </button>
          </section>

          <div className={`inputs-box `}>
            <label
              style={{ color: accountCreatedErr ? "red" : "" }}
              htmlFor="name"
            >
              {<FaUserCircle />}
              Username
            </label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-item"
              name="name"
              id="name"
            />
            <label
              style={{ color: accountCreatedErr ? "red" : "" }}
              htmlFor="email"
            >
              {<FaRegEnvelope />} Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-item"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              style={{ color: accountCreatedErr ? "red" : "" }}
              htmlFor="password"
            >
              {<FaUnlock />} Password
            </label>
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
    </>
  );
}
