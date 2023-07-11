import React, { useState } from "react";

//Componetns import
import LoginForm from "../../accountsDataComponents/loginForm";
import CreateUserAccountForm from "../../accountsDataComponents/createUserForm";

//Tools import
import {
  FaBars,
  FaRegLightbulb,
  FaUserCircle,
  FaRegEdit,
  FaShoppingCart,
} from "react-icons/fa";

import { Route, Routes, useNavigate, Link } from "react-router-dom";

export default function NavBar(props) {
  const [menuHandler, setmenuHandler] = useState(false);

  console.log();

  const navigate = useNavigate();

  const CheckTokenUser = () => {
    navigate("/orders");
  };

  return (
    <>
      <nav className="navigation">
        <h3>ECOMMERCE</h3>

        <ul>
          <Link className="router-link" to="/about">
            <li>{<FaUserCircle />} About</li>
          </Link>
          <li>{<FaRegEdit />} Colaboration</li>
          <li>{<FaRegLightbulb />} Help</li>
        </ul>

        <button className="btn-contact-nav">Contact</button>
        <div className="wrapper-options">
          <ul id="options-list">
            <li
              className="options-list-item"
              onClick={() => props.setModalOptionsAccount(true)}
            >
              {<FaUserCircle />}
            </li>
            <li className="options-list-item" onClick={() => CheckTokenUser()}>
              {<FaShoppingCart />}
            </li>
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
          <li
            className="options-list-item"
            onClick={() => props.setModalOptionsAccount(true)}
          >
            {<FaUserCircle />} Account
          </li>
          <li onClick={() => CheckTokenUser()} className="options-list-item">
            {<FaShoppingCart />} My orders
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<CreateUserAccountForm />} />
      </Routes>
    </>
  );
}
