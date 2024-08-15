import React, { useState, useEffect } from "react";

const AnathemaGenerator = () => {
  const anathemas =  
      [
        "Lying or deceiving unnecessarily",
        "Stealing from the needy",
        "Ignoring a call for help",
        "Committing an act of cruelty",
        "Betraying a comrade",
        "Killing an innocent",
        "Abandoning an ally in need",
        "Ignoring a blatant injustice",
        "Refusing to offer aid to the wounded",
        "Acting out of selfishness rather than for the common good",
     
        "Showing mercy to an enemy",
        "Failing to seize power when it's within grasp",
        "Assisting the weak without expecting something in return",
        "Refusing to lie or cheat when it's beneficial",
        "Not taking advantage of others' misfortunes",
        "Ignoring a chance for personal gain",
        "Failing to strike down an enemy out of pity",
        "Helping others without personal gain",
        "Respecting authority without question",
        "Not using any means necessary to achieve one's goals"
      ]
      

  const [anathema, setAnathema] = useState('...Loading Anathema');

  useEffect(() => {
   
    const randomAnathema = () => {
       
        return anathemas[Math.floor(Math.random() * anathemas.length)]
    }
    setAnathema(randomAnathema());
  }, [anathemas]);

  return (
    <div className="anathema-container">
      <p>Anathema: {anathema}</p>
    </div>
  );
}

export default AnathemaGenerator;