import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Save the location they tried to visit for redirecting after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
