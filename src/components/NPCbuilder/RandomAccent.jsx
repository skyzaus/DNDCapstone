import React, { useState, useEffect } from "react";

const RandomAccent = () => {
  const Accents = ['Irish', 'Scottish', 'British', 'French', 'Spanish', 'German', 'Russian', 'Italian', 'Australian', 'American'];
  
  const getRandomAccent = () => {
    return Accents[Math.floor(Math.random() * Accents.length)];
  }

  const [accent, setAccent] = useState(getRandomAccent());

  useEffect(() => {
    setAccent(getRandomAccent());
  }, [Accents]);

  return (
      <h2>Accent: <strong>{accent ? accent : 'Building Accent...' }</strong></h2>
  );
}

export default RandomAccent;