import React, { useState } from 'react';


function HealthCounter() {
  const [count, setCount] = useState(Math.floor(Math.random() * (15 - 5 + 1)) + 5);

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleSubtract = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="health-counter-container">
      <p>
        <button onClick={handleSubtract}>-</button>
        HP: {count}
        <button onClick={handleAdd}>+</button>
      </p>
    </div>
  );
}

export default HealthCounter;