import React, { useState, useContext } from 'react';  // Importa React e i hooks
import { useNavigate } from 'react-router-dom'; // Importa useNavigate per reindirizzare
import { AuthContext } from '../AuthContext'; // Importa il contesto di autenticazione

const Login = () => {
  const { login } = useContext(AuthContext); // Usa il contesto per ottenere la funzione di login
  const [username, setUsername] = useState(''); // Stato per username
  const [password, setPassword] = useState(''); // Stato per la password
  const navigate = useNavigate(); // Hook per navigare tra le pagine

  const handleLogin = () => {
    // Verifica se le credenziali sono corrette
    login(username, password); // Passa username e password al contesto
    if (username === 'bro' && password === '123') {  // Controlla la validazione
      navigate('/users');  // Se il login è corretto, naviga alla pagina users
    } else {
      alert('Username o password errati'); // Mostra l'alert se le credenziali sono errate
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Inserisci username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}  // Gestisci l'input per l'username
      />
      <input
        type="password"
        placeholder="Inserisci password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}  // Gestisci l'input per la password
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
