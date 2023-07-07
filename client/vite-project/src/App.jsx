import React from "react";
import LoginForm from "./componets/accountsDataComponents/loginForm";
import WelcomePage from "./componets/welcomePage";
import CreateUserAccountForm from "./componets/accountsDataComponents/createUserForm";

import AppLayout from "./componets/mainAppLayout/appLayout";

import { Link, Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
    
        <Route path="/" element={<WelcomePage />} />
      
          <Route path="/appLayout" element={<AppLayout />} />
        
        <Route path="/register" element={<CreateUserAccountForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/welcome" element={<WelcomePage/>}/>
      
     </Routes>
    </>
  );
}


export default App
