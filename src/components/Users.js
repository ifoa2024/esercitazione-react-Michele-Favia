import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';  // Importa il contesto di autenticazione

const Users = () => {
  const { user, logout } = useContext(AuthContext); // Ottieni l'utente dal contesto e la funzione logout

  const [users, setUsers] = useState([]); // Stato per memorizzare gli utenti
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per l'errore

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Filtra gli utenti per rimuovere Clementina DuBuque (id: 8)
        const filteredUsers = data.filter(user => user.id !== 8);

        setUsers(filteredUsers);  // Imposta gli utenti filtrati nello stato
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (!user) {
    return <div className="text-center">Per visualizzare gli utenti, devi effettuare il login.</div>;
  }

  if (loading) {
    return <div className="text-center">Caricamento in corso...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Errore: {error.message}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista degli Utenti</h1>
      
      {/* Aggiungi il pulsante di logout */}
      <button onClick={logout} className="btn btn-danger mb-3">Logout</button>
      
      <div className="row">
        {users.map(user => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text"><strong>Email:</strong> {user.email}</p>
                <p className="card-text"><strong>Telefono:</strong> {user.phone}</p>
                <p className="card-text"><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
