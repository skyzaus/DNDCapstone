import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Import your ThemeContext
import styles from './LoginPage.module.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const { isDarkMode } = useContext(ThemeContext); // Access the current theme

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className={`${styles['login-container']} ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Login</h2>
      <form className={styles['login-form']} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;