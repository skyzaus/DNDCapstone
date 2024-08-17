import React, { useState } from 'react';


function HealthCounter() {
  const [count, setCount] = useState(Math.floor(Math.random() * (15 - 5 + 1)) + 5);

  const add = () => {
    setCount(countUp=> countUp + 1);
  };

  const subtract = () => {
    setCount(countDown => countDown - 1);
  };

  return (
    <div className="health-counter-container">
      <p>
        <button onClick={subtract}>-</button>
        HP: {count}
        <button onClick={add}>+</button>
      </p>
    </div>
  );
}

export default HealthCounter;