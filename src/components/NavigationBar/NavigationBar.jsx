import React from "react";
import { NavLink } from 'react-router-dom';
import './NavigationBar.module.css';

function NavigationBar({ username }) {
  return (
    <div className="navbar">
      <div>
      <ul>
        <li><NavLink to="/">Home</NavLink>{/* todo */}</li>
        <li> <NavLink to="/character1">NPC Generator</NavLink> {/* todo */}</li>
        <li><NavLink to="/DiceRoller">Dice</NavLink>{/* todo */}</li>
        <li> <NavLink to="/LootGenerator">Gold Generator</NavLink>{/* todo */}</li>
        <li><NavLink to="/StoryGenerator">Story Generator</NavLink>{/* todo */}</li>
        </ul>
      </div>
      <div>
        {username && <span className="welcome-message">Welcome, {username}</span>}
      </div>
    </div>
  );
}

export default NavigationBar;