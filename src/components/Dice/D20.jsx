import React, { useState, useEffect } from 'react';

const D20 = ({ username, onLogout }) => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 20) + 1;
      setRandomNumber(newRandomNumber);
      setTimeLeft(30);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const countdown = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [timeLeft]);

  return (
   <>
   <div className='D20'>
      <h3>D20 roll every 30 seconds: {randomNumber} (Next roll in {timeLeft}s)</h3>
      {username ? (
        <div>
          <span className="welcome-message">Welcome, {username}</span>
          <button onClick={onLogout} className="logout-button">Logout</button>
        </div>
      ) : (
        <span className="welcome-message">You are not logged in</span>
      )}
    </div>
   
    </>
  );
};

export default D20;
