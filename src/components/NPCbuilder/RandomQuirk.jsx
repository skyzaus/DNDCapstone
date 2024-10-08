import React, { useState, useEffect } from 'react';

const RandomQuirk = () => {
  const quirks = [
    'Talks to a pet mouse as if it knows the answers to everything.',
    'Believes every dream is a prophecy.',
    'Always sleeps with a weapon in hand.',
    'Whispers to their spells before casting them.',
    'Prefers to eat only raw food.',
    'Constantly switches between third and first person when speaking.',
    'Collects teeth from every defeated monster.',
    'Always carries around a mysterious, unopened letter.',
    'Obsessed with personal hygiene, cleans their armor and weapons daily.',
    'Wears a hat no matter the occasion or weather.',
    'Can\'t resist a riddle or puzzle, sees them as a challenge.',
    'Always checks for traps, even in the most unlikely places.',
    'Refuses to kill spiders because they\'re sacred.',
    'Carries a mirror at all times to check their appearance.',
    'Has a phobia of magic, but is a magic user.',
    'Constantly misplaces their spellbook.',
    'Enjoys the taste of healing potions a little too much.',
    'Always wears a cloak, even in hot weather.',
    'Talks in rhyme, all the time.',
    'Doesn\'t trust anyone with a beard.'
  ];
  
  const getRandomQuirk = () => {
    return quirks[Math.floor(Math.random() * quirks.length)];
  }

  const [quirk, setQuirk] = useState(getRandomQuirk());

  useEffect(() => {
    setQuirk(getRandomQuirk());
  }, [quirks]);

  return (
    <h2>
      Quirk: {quirk ? quirk : 'Building Quirk...' }
    </h2>
  );
}

export default RandomQuirk;