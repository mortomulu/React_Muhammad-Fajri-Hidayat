import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const [auth, setAuth] = useState(true);

  return <>{auth ? <Outlet /> : <Navigate to="/" />}</>;
}
