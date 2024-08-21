import React, { useState } from 'react';


function useDiceRoll() {
  const [roll, setRoll] = useState(0);
  const [lastDice, setLastDice] = useState(1);
  
  function rollDice(diceType) {
    setRoll(Math.floor(Math.random() * diceType) + 1);
    setLastDice(diceType);
  }

  return {
    roll,
    rollDice,
    lastDice
  }
}

function Dice() {
  const { roll, rollDice, lastDice } = useDiceRoll();

  return (
    <div style={{ 
      backgroundImage: 'url("https://i.redd.it/nuc761buze561.jpg")',
      backgroundSize: 'cover',   
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '70vh',
      color: 'gold', 
     
    }}>
      
      <h1>Roll the Dice!</h1>
      <button onClick={() => rollDice(-1)}>
        Reset Roll
      </button>
      <button onClick={() => rollDice(2)} className="dice d2">D2</button>
      <button onClick={() => rollDice(3)} className="dice d3">D3</button>
      <button onClick={() => rollDice(4)} className="dice d4">D4</button>
      <button onClick={() => rollDice(6)} className="dice d6">D6</button>
      <button onClick={() => rollDice(8)} className="dice d8">D8</button>
      <button onClick={() => rollDice(10)} className="dice d10">D10</button>
      <button onClick={() => rollDice(12)} className="dice d12">D12</button>
      <button onClick={() => rollDice(20)} className="dice d20">D20</button>
      <h2>D{lastDice} Rolled a {roll}</h2>
    </div>
  );
}

export default Dice;