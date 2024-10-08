import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './LoginPage.module.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { isDarkMode } = useContext(ThemeContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
      setError('');
    } else {
      setError('Username is required.');
    }
  };

  return (
    <div className={`login-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Enter Username</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
