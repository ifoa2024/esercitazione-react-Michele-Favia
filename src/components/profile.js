import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Benvenuto, {user.username}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
