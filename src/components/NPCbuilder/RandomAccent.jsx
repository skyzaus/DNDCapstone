import React, { useState, useEffect } from "react";

const RandomAccent = () => {
  const accents = [
    'Irish', 'Scottish', 'British', 'French', 'Spanish', 'German', 'Russian', 'Italian', 'Australian', 'American'
  ];

  const getRandomAccent = () => {
    return accents[Math.floor(Math.random() * accents.length)];
  };

  const [accent, setAccent] = useState(getRandomAccent());

  useEffect(() => {
    setAccent(getRandomAccent());
  }, [getRandomAccent]);

  return (
    <h4>Accent: <strong>{accent || 'Building Accent...'}</strong></h4>
  );
};

export default RandomAccent;