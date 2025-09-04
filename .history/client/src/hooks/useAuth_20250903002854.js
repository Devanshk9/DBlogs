import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation, Navigate } from 'react-router-dom';

export function useAuth() {
  const { token, user } = useContext(AuthContext);
  const location = useLocation();

  const isAuthenticated = !!token;

  const requireAuth = (component) => {
    if (!isAuthenticated) {
      // Save the location they tried to visit for redirecting after login
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return component;
  };

  return {
    isAuthenticated,
    requireAuth,
    user
  };
}
