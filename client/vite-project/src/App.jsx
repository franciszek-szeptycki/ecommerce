import React from "react";
import LoginForm from "./componets/accountsDataComponents/loginForm";
import OrderUser from "./componets/ordersComponents/order";
import PrivateRoutes from "./componets/securityPage/PrivateRoutes";
import CreateUserAccountForm from "./componets/accountsDataComponents/createUserForm";

import AppLayout from "./componets/mainAppLayout/appLayout";

import { Link, Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route element={<PrivateRoutes/>}>
          <Route path="/orders" element={<OrderUser/>}/>
        </Route>
        <Route path="/appLayout" element={<AppLayout />} />
        <Route path="/register" element={<CreateUserAccountForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
