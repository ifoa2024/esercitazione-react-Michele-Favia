import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]); // Stato per memorizzare gli utenti
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per l'errore

  // Effettua la chiamata API al caricamento del componente
  useEffect(() => {
    // Funzione per recuperare i dati
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data); // Imposta i dati degli utenti nello stato
        setLoading(false); // Modifica lo stato di caricamento
      } catch (error) {
        setError(error); // Gestisce l'errore
        setLoading(false); // Modifica lo stato di caricamento
      }
    };

    fetchUsers();
  }, []); // La chiamata API viene effettuata solo una volta quando il componente viene montato

  // Gestisce lo stato di caricamento e gli errori
  if (loading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Errore: {error.message}</p>;
  }

  return (
    <div>
      <h1>Lista degli Utenti</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Telefono: {user.phone}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
