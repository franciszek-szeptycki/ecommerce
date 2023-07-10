import React from "react";
//Imaga icon import
import Icon from "./images/user.png";

//Tools import
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ModalOptions(props) {
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
    </>
  );
}
