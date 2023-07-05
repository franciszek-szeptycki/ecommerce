import React from "react";
import LoginForm from "./components/accountsDataComponents/loginForm";
import ContactForm from "./components/accountsDataComponents/createUserForm";
import PrivateRouts from "./components/privateRoutes";
import AppLayout from "./components/mainAppLayout/appLayout";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route element={<PrivateRouts />}>
          <Route path="/appLayout" element={<AppLayout />} />
        </Route>
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}
export default App;
