import { getToken } from "@/services/authService";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = getToken();

  if (!token || token === "undefined") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
