import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { CharacterProvider } from "./context/CharacterContext"; // Import the provider
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRoute from "./routes/AppRoute";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import "./App.css";
import D20 from "./components/Dice/D20";

function App() {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username) => {
    setUsername(username);
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider>
      <CharacterProvider>
        {" "}
       
        <BrowserRouter>
          <DarkModeSwitch />
          <div className="app">
            <header className="app__header">
              <NavigationBar username={username} />
              <AppRoute
                onLogin={handleLogin}
                isAuthenticated={isAuthenticated}
              />
            </header>
            <main className="app__main"></main>
            <footer className="app__footer">
              <D20 />
            </footer>
          </div>
        </BrowserRouter>
      </CharacterProvider>
    </ThemeProvider>
  );
}

export default App;
