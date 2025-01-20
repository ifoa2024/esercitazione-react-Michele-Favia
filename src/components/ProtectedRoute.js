import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';


const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Se l'utente non è loggato, redirige alla pagina di login
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
