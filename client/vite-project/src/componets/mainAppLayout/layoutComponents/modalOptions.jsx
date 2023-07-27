import React, { useEffect, useState } from "react";
//Imaga icon import
import Icon from "./images/user.png";

//Tools import
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import '../mainStyles/modalOptions.css'

export default function ModalOptions(props) {
  const [descryption, setDescryption] = useState(
    " Hi, there! you can choose whether you want to log in or create account or not."
  );
  const [buttonLoginTitle, setButtonLoginTitle] = useState("Login");
  const [buttonRegisterTitle, setButtonRegisterTitle] = useState("Register");

  const navigate = useNavigate();

  const checkLoginState = () => {
    localStorage.getItem("Account Token")
      ? clearUserData()
      : navigate("/login");
  };

  const clearUserData = () => {
    localStorage.clear();
    setButtonLoginTitle("Login");
  };

  const resetButtonValue = () => {
    setButtonLoginTitle("Login");
    setButtonRegisterTitle("Register");
  };

  const changeButtonValue = () => {
    setButtonLoginTitle("Log out");
    setButtonRegisterTitle("New account");
  };
  useEffect(() => {
    localStorage.getItem("Account Token")
      ? changeButtonValue()
      : resetButtonValue();
  }, []);

  return (
    <>
      <div
        className={`modal-main-container ${props.state ? "active-modal" : ""} `}
      >
        <div className="modal-container">
          <header>
            <img src={Icon} alt="" />
            <button
              className="btn-hidden-modal"
              onClick={() => props.setState(false)}
            >
              {<FaTimes />}
            </button>
          </header>
          <section className="modal-text-descryption-container">
            <p>{descryption}</p>
          </section>
          <section className="options-container-modal">
            <button onClick={() => checkLoginState()}>
              {buttonLoginTitle} {<FaCheckCircle />}
            </button>

            <Link to="/register">
              <button>
                {buttonRegisterTitle} {<FaCheckCircle />}
              </button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
