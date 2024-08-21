import React, { useContext, useEffect } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { faker } from "@faker-js/faker";
import Advice from "../npcBuilder/Advice";
import HealthCounter from "../npcBuilder/HealthCounter";
import AnathemaGenerator from "../npcBuilder/AnathemaGenerator";
import RandomAccent from "../npcBuilder/RandomAccent";
import RandomRaceGenerator from "../npcBuilder/RandomRaceGenerator";
import RandomQuirk from "../npcBuilder/RandomQuirk";

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

    let maxStat = Object.keys(stats).reduce((a, b) =>
      stats[a] > stats[b] ? a : b
    );
    const dndClass =
      {
        strength: "Fighter",
        dexterity: "Rogue",
        constitution: "Barbarian",
        intelligence: "Wizard",
        wisdom: "Cleric",
        charisma: "Bard",
      }[maxStat] || "Commoner";

    setCharacter({ ...stats, dndClass });
  };

  useEffect(() => {
    if (!character) {
      generateCharacter();
    }
  }, [character]);

  if (!character) return null;

  return (
    <div
      className="Chr"
      style={{
        backgroundImage:
          'url("https://www.skullsplitterdice.com/cdn/shop/articles/backgrounds_compressed_1200x1200_crop_center.jpg?v=1590088985")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
        color: "gold",
      }}
    >
      <button onClick={generateCharacter}>Generate New Character</button>
      <Advice />
      <h2>Random D&D NPC</h2>
      <HealthCounter />
      <h2>
        <strong>Name: {character.name}</strong>
      </h2>
      <RandomAccent />
      <RandomRaceGenerator />
      <h2>Gender: {faker.person.sex()}</h2>
      <h2>Class: {character.dndClass}</h2>
      <h2>Strength: {character.strength}</h2>
      <h2>Dexterity: {character.dexterity}</h2>
      <h2>Constitution: {character.constitution}</h2>
      <h2>Intelligence: {character.intelligence}</h2>
      <h2>Wisdom: {character.wisdom}</h2>
      <h2>Charisma: {character.charisma}</h2>
      <RandomQuirk />
      <AnathemaGenerator />
    </div>
  );
};

export default RandomCharacter;
