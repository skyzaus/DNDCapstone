import React from "react";

function Home() {
  return (
    <div 
      style={{ 
        backgroundImage: 'url("https://assets-prd.ignimgs.com/2022/05/17/techlandrpg-1652799881816.jpg")',
        backgroundSize: 'auto',   
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat', 
        height: '70vh', 
        color: 'gold', 
       
      }}
    >
      <h1 style={{ textAlign: 'center'}}>Welcome to the D&D NPC Character Generator</h1>
     <div >
      <h1 style={{ textAlign: 'center'}}>In This App You Can</h1>
      <ul style={{ textAlign: 'center'}}>
        <li><h1>Generate an NPC!</h1></li>
        <li><h1>Roll Some Dice!</h1></li>
        <li><h1>Collect Some Coins!</h1></li>
        <li><h1>Make A Story!</h1></li>
      </ul>
      </div>
    </div>
  );
}

export default Home;