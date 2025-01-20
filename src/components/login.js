import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Importa il contesto

const Login = () => {
  const { login } = useContext(AuthContext); // Usa il contesto per fare il login
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username); // Memorizza l'utente nel contesto
    navigate('/profile'); // Reindirizza alla pagina del profilo
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Inserisci username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

