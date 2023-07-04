import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const auth = { token: false };
export default function PrivateRouts() {
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}
