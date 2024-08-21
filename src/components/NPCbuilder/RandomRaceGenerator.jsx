import React, { useEffect, useState } from 'react';

const RandomRaceGenerator = () => {
    const races = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling', 'Dragonborn'];
    const [race, setRace] = useState('Setting Race...')

   useEffect(() => {
    const getRandomRace = () => {
        return races[Math.floor(Math.random() * races.length)]
    }
    setRace(getRandomRace())
   },[races]
)
return <h2>Race: <strong>{race}</strong></h2>;


}


export default RandomRaceGenerator;

