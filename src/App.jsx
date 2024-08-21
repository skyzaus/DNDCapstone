import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { CharacterProvider } from "./context/CharacterContext"; 
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRoute from "./routes/AppRoute";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import "./App.css";
import D20 from "./components/Dice/D20";

function App() {
  const [username, setUsername] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username) => {
    setUsername(username);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUsername(null);
    setIsAuthenticated(false);
  };

  return (
    <ThemeProvider>
      <CharacterProvider>
        <BrowserRouter>
          
          <div className="app" style={{ 
      backgroundImage: 'url("https://images7.alphacoders.com/133/thumb-1920-1330715.png")',
      backgroundSize: 'cover',   
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
     
      color: 'white',  
     
    }}>
            <header className="app__header">
              <NavigationBar username={username} onLogout={handleLogout} />
             
            </header>
            <main className="app__main">
            <AppRoute onLogin={handleLogin} isAuthenticated={isAuthenticated} />
            </main>
            <footer className="app__footer">
              <D20 username={username} onLogout={handleLogout} />
              <DarkModeSwitch />
            </footer>
          </div>
        </BrowserRouter>
      </CharacterProvider>
    </ThemeProvider>
  );
}

export default App;
