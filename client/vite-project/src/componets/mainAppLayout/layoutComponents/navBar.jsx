import React, { useState } from "react";

//Componetns import
import LoginForm from "../../accountsDataComponents/loginForm";
import CreateUserAccountForm from "../../accountsDataComponents/createUserForm";

//Image icons import
import Icon from "./images/user.png";

//Icons import
import {
  FaBars,
  FaRegLightbulb,
  FaUserCircle,
  FaRegEdit,
  FaShoppingCart,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

//Router import

import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [menuHandler, setmenuHandler] = useState(false);
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <nav className="navigation">
        <h3>ECOMMERCE</h3>

        <ul>
          <li>{<FaUserCircle />} About</li>
          <li>{<FaRegEdit />} Colaboration</li>
          <li>{<FaRegLightbulb />} Help</li>
        </ul>

        <button className="btn-contact-nav">Contact</button>
        <div className="wrapper-options">
          <ul id="options-list">
            <li
              className="options-list-item"
              onClick={() => setModalState(true)}
            >
              {<FaUserCircle />}
            </li>
            <li className="options-list-item">{<FaShoppingCart />}</li>
          </ul>
        </div>

        <button onClick={() => setmenuHandler(!menuHandler)} id="btn-toggle">
          {<FaBars />}
        </button>
      </nav>
      <div className={`drop-menu ${menuHandler ? "active-menu" : ""}`}>
        <header>
          <button className="btn-close-menu">Contact</button>
        </header>
        <ul>
          <li>{<FaUserCircle />} About</li>
          <li>{<FaRegEdit />} Colaboration</li>
          <li>{<FaRegLightbulb />} Help</li>
          <li className="options-list-item" onClick={() => setModalState(true)}>
            {<FaUserCircle />} Account
          </li>
          <li className="options-list-item">{<FaShoppingCart />} My orders</li>
        </ul>
      </div>

      <div
        className={`modal-main-container ${modalState ? "active-modal" : ""} `}
      >
        <div className="modal-container">
          <header>
            <img src={Icon} alt="" />
            <button
              className="btn-hidden-modal"
              onClick={() => setModalState(false)}
            >
              {<FaTimes />}
            </button>
          </header>
          <section className="modal-text-descryption-container">
            <p>
              Hi, there! you can choose whether you want to log in or create an
              account or not
            </p>
          </section>
          <section className="options-container-modal">
            <Link to="/login">
              <button>Login {<FaCheckCircle />}</button>
            </Link>
            <Link to="/register">
              <button>Register {<FaCheckCircle />}</button>
            </Link>
          </section>
        </div>
      </div>

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<CreateUserAccountForm />} />
      </Routes>
    </>
  );
}
