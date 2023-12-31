import React from "react";
import LoginForm from "./componets/accountsDataComponents/loginForm";
import OrderUser from "./componets/ordersComponents/order";

import CreateUserAccountForm from "./componets/accountsDataComponents/createUserForm";
import About from "./componets/mainAppLayout/OptionsPages/about";
import AppLayout from "./componets/mainAppLayout/appLayout"
import ModalOptions from "./componets/mainAppLayout/layoutComponents/modalOptions";
import ProductItemModal from "./componets/mainAppLayout/layoutComponents/ProductsLayout/ProductItemModal";

import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />} />

        <Route path="/orders" element={<OrderUser />} />
        <Route path="/appLayout" element={<AppLayout />} />
        <Route path="/register" element={<CreateUserAccountForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/modal" element={<ModalOptions/>}/>
        <Route path="/productModal" element={<ProductItemModal/>}/>
      </Routes>
    </>
  );
}

export default App;
