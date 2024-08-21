import React from "react";
import { NavLink } from 'react-router-dom';
import './NavigationBar.module.css';


function NavigationBar() {
  return (
    <div className="navbar" style={{ 
      backgroundImage: 'url("https://t4.ftcdn.net/jpg/06/80/14/81/360_F_680148114_RZDs683lGzNW9uB6PBNGblhCv71tr1A2.jpg")',
      backgroundSize: '100%',   
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      
      color: 'gold',  
     
    }}>
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/character1">NPC Generator</NavLink></li>
          <li><NavLink to="/DicePage">Dice</NavLink></li>
          <li><NavLink to="/LootPage">Gold</NavLink></li>
          <li><NavLink to="/StoryPage">Story</NavLink></li>
          
        </ul>
        {/* <DarkModeSwitch/> */}
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default NavigationBar;