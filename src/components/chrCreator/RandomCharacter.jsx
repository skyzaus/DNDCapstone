import React, { useContext, useEffect } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import { faker } from '@faker-js/faker';
import Advice from '../npcBuilder/Advice';
import HealthCounter from '../npcBuilder/HealthCounter';
import AnathemaGenerator from '../npcBuilder/AnathemaGenerator';
import RandomAccent from '../npcBuilder/RandomAccent';
import RandomRaceGenerator from '../npcBuilder/RandomRaceGenerator';
import RandomQuirk from '../NPCbuilder/RandomQuirk';


const RandomCharacter = () => {
  const { character, setCharacter } = useContext(CharacterContext);

  const generateStat = () => {
    return Math.floor(Math.random() * (18 - 3 + 1)) + 3;
  };

  const generateCharacter = () => {
    const stats = {
      name: faker.person.fullName(),
      strength: generateStat(),
      dexterity: generateStat(),
      constitution: generateStat(),
      intelligence: generateStat(),
      wisdom: generateStat(),
      charisma: generateStat(),
    };

    let maxStat = Object.keys(stats).reduce((a, b) => (stats[a] > stats[b] ? a : b));
    const dndClass = {
      strength: 'Fighter',
      dexterity: 'Rogue',
      constitution: 'Barbarian',
      intelligence: 'Wizard',
      wisdom: 'Cleric',
      charisma: 'Bard',
    }[maxStat] || 'Commoner';

    setCharacter({ ...stats, dndClass });
  };

  useEffect(() => {
    if (!character) {
      generateCharacter();
    }
  }, [character]);

  if (!character) return null;

  return (
    <div className="Chr">
     
      <h2>Random D&D NPC</h2>
      <HealthCounter />
      <h4><strong>Name: {character.name}</strong></h4>
      <RandomAccent />
      <RandomRaceGenerator />
      <h4>Gender: {faker.person.sex()}</h4>
      <h4>Class: {character.dndClass}</h4>
      <h4>Strength: {character.strength}</h4>
      <h4>Dexterity: {character.dexterity}</h4>
      <h4>Constitution: {character.constitution}</h4>
      <h4>Intelligence: {character.intelligence}</h4>
      <h4>Wisdom: {character.wisdom}</h4>
      <h4>Charisma: {character.charisma}</h4>
      <Advice />
      <AnathemaGenerator />
     
      <RandomQuirk/>
      <button onClick={generateCharacter}>Generate New Character</button>
    </div>
  );
};

export default RandomCharacter;