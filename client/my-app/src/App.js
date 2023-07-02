import React from "react";
import LoginForm from "./components/loginForm";
import ContactForm from "./components/createUserForm";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}
export default App;
