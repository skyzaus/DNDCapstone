import React, { useState } from 'react';

const LootGenerator = () => {
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [copper, setCopper] = useState(0);

    const generateLoot = () => {
        const generatedGold = Math.floor(Math.random() * 25) + 1;
        const generatedSilver = Math.floor(Math.random() * 50) + 1;
        const generatedCopper = Math.floor(Math.random() * 100) + 1;

        setGold(generatedGold);
        setSilver(generatedSilver);
        setCopper(generatedCopper);
    };

    return (
        <div
        style={{ 
            backgroundImage: 'url("https://img.freepik.com/premium-photo/bag-gold-coins-black-background_923558-2640.jpg")',
            backgroundSize: 'cover',   
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', 
            height: '70vh',
            color: 'gold',  
           
          }}>
            <h1 >Gold Generator</h1>
           <div className='Loot'>
            <div style={{ color: 'gold'}}><h3>Gold: {gold}</h3></div>
            <div style={{ color: 'silver'}}><h3>Silver: {silver}</h3></div>
            <div style={{ color: '#B87333'}}><h3>Copper: {copper}</h3></div>
            </div>
            <button onClick={generateLoot}>Generate Loot</button>
        </div>
    );
};

export default LootGenerator;
