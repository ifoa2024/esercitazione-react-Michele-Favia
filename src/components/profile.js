import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext'; // Usa il contesto

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Benvenuto, {user}!</h1>
      <button onClick={logout}>Logout</button> {/* Aggiungi un bottone per il logout */}
    </div>
  );
};

export default Profile;
