import React from "react";
import { Navigate, Outlet } from "react-router-dom";
export let auth = { token: false };
export default function PrivateRoutes() {
  return auth.token ? <Outlet /> : <Navigate to="/appLayout" />;
}
