import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stato dell'utente

  const login = (userData) => {
    setUser(userData); // Imposta i dati dell'utente al login
  };

  const logout = () => {
    setUser(null); // Resetta l'utente al logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Definiamo il custom hook useAuth per accedere al contesto
export const useAuth = () => {
  return useContext(AuthContext);
};
