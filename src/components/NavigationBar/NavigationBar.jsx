import React from "react";
import { NavLink } from 'react-router-dom';
import './NavigationBar.module.css';

function NavigationBar({ username }) {
  return (
    <div className="navbar">
      <div>
      
        <NavLink to="/">Home</NavLink>{/* todo */}
        <NavLink to="/character1">NPC Generator</NavLink> {/* todo */}
        <NavLink to="/DiceRoller">Dice</NavLink>{/* todo */}
        <NavLink to="/LootGenerator">Gold Generator</NavLink>{/* todo */}
        <NavLink to="/StoryGenerator">Story Generator</NavLink>{/* todo */}
      </div>
      <div>
        {username && <span className="welcome-message">Welcome, {username}</span>}
      </div>
    </div>
  );
}

export default NavigationBar;