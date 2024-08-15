import React from "react";
import { NavLink } from 'react-router-dom';



function NavigationBar({ username }) {
  return (
    <div className="navbar">
      <div>
        <ul>
       <li> <NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/character1">NPC Generator</NavLink></li>
       <li><NavLink to="/DicePage">Dice</NavLink></li>
       <li> <NavLink to="/LootGenerator">Gold</NavLink></li>
       <li> <NavLink to="/StoryPage">Story</NavLink></li> 
        </ul>
      </div>
      <div>
        {username && <span className="welcome-message">Welcome, {username}</span>}
      </div>
    </div>
  );
}

export default NavigationBar;