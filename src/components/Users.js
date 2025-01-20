import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]); // Stato per memorizzare gli utenti
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per l'errore

  // Effettua la chiamata API al caricamento del componente
  useEffect(() => {
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
    return <div className="text-center">Caricamento in corso...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Errore: {error.message}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista degli Utenti</h1>
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
