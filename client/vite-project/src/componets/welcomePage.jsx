import React, { useState } from "react";
import LoginForm from "./accountsDataComponents/loginForm";
import CreateUserAccountForm from "./accountsDataComponents/createUserForm";
import AppLayout from "./mainAppLayout/appLayout";
import "./welcomePageStyles/welcome.css";
import { FaUncharted } from "react-icons/fa";

import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function WelcomePage() {
  return (
    <>
      <div className="container-welcome">
        <div>
          <header className="welocme-header">
            <h2>Welocme!</h2>
          </header>
          <section className="text-info-conatiner">
            <p>Nice to see you agin!</p>
          </section>
          <section className="button-conatiner">
            <button>
              <Link to="/login" className="link">
                Login
              </Link>
            </button>
          </section>
          <section className="next-page-conatiner">
            <button>
              <Link className="link" to="/appLayout">
                Continiue
              </Link>
            </button>
          </section>
          <footer>
            <p>Do you want create account ? </p>
            <Link className="link" to="/register">
              <p id="register">Register {<FaUncharted />}</p>
            </Link>
          </footer>
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<CreateUserAccountForm />} />
        <Route path="/appLayout" element={<AppLayout />} />
      </Routes>
    </>
  );
}
