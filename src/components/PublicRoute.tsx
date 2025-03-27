import { getToken } from "@/services/authService";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = getToken();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
