import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const auth = { token: false };
export default function PrivateRouts() {
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export {auth}
