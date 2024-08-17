import React, { useState } from "react";

const LootGenerator = () => {
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [copper, setCopper] = useState(0);

  const generateLoot = () => {
    const generatedGold = Math.floor(Math.random() * 25) + 1;
    const generatedSilver = Math.floor(Math.random() * 50) + 1;
    const generatedCopper = Math.floor(Math.random() * 99) + 1;

    setGold(generatedGold);
    setSilver(generatedSilver);
    setCopper(generatedCopper);
  };

  return (
    <div>
      <h2>Loot Generator</h2>
      <div>Gold: {gold}</div>
      <div>Silver: {silver}</div>
      <div>Copper: {copper}</div>
      <button onClick={generateLoot}>Generate Loot</button>
    </div>
  );
};

export default LootGenerator;
