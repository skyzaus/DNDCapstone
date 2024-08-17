import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./LoginPage.module.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { isDarkMode } = useContext(ThemeContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
      setError("");
    } else {
      setError("Username is required Dungeon Master.");
    }
  };

  return (
    <div className={` ${isDarkMode ? "dark-mode" : ""}`}>
      <h2>Login</h2>
      <form className={styles["login-form"]} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
