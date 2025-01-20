import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Importa il contesto dell'autenticazione

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Ottieni l'utente dal contesto

  if (!user) {
    // Se l'utente non è loggato, reindirizza alla pagina di login
    return <Navigate to="/login" />;
  }

  return children; // Se l'utente è loggato, mostra il contenuto
};

export default ProtectedRoute;
