import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AppRoute from './routes/AppRoute';
import DarkModeSwitch from './components/DarkModeSwitch/DarkModeSwitch';
import './App.css';


function App() {
  const [username, setUsername] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username) => {
    setUsername(username);
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider>
      
        <BrowserRouter>
          <DarkModeSwitch />
          <div className="app">
           
             
              <NavigationBar username={username} />
              <AppRoute onLogin={handleLogin} isAuthenticated={isAuthenticated} />
          
           
          </div>
        </BrowserRouter>
     
    </ThemeProvider>
  );
}

export default App;
