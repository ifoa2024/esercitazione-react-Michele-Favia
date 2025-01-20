import React, { createContext, useState } from 'react';

export const AuthContext = createContext(); // Crea il contesto per l'autenticazione

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Memorizza l'utente loggato

  const login = (username, password) => {
    // Logica per il login (verifica username e password)
    if (username === 'bro' && password === '123') {
      setUser(username);  // Se le credenziali sono corrette, imposta l'utente nel contesto
    } else {
      alert('Username o password errati');
    }
  };

  const logout = () => {
    setUser(null);  // Logout dell'utente
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}  {/* Passa i dati del contesto ai componenti figli */}
    </AuthContext.Provider>
  );
};
