import React, { useEffect, useState } from "react";
import axios from "axios";

const Advice = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const res = await axios.get(`https://api.adviceslip.com/advice`);
      setData(res.data.slip.advice);
      console.log(res.data.slip.advice);
    }
    loadProfile();
  }, );

  return (
    <div className="advice-container">
      <h1>Advice: {data ? data : 'Thinking...'}</h1>
    </div>
  );
};

export default Advice;