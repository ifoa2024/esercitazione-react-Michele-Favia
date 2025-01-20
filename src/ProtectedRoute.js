import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assumendo che tu stia usando un AuthContext

function ProtectedRoute({ children }) {
  const { user } = useAuth(); // Usa il contesto per verificare se l'utente è autenticato

  if (!user) {
    // Se l'utente non è autenticato, reindirizza al login
    return <Navigate to="/login" />;
  }

  // Se l'utente è autenticato, mostra il contenuto
  return children;
}

export default ProtectedRoute;
