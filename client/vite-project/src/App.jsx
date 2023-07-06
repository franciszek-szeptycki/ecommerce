import React from "react";
import LoginForm from "./componets/accountsDataComponents/loginForm";
import ContactForm from "./componets/accountsDataComponents/createUserForm";
import PrivateRouts from "./componets/privateRoutes";
import AppLayout from "./componets/mainAppLayout/appLayout";

import { Link, Route, Routes, Router } from "react-router-dom";

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


export default App
