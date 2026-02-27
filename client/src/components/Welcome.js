import React from 'react';
import { useAuth } from '../context/AuthContext';

const Welcome = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="welcome-container">
      <h1>Welcome, {user?.username}!</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Welcome;
