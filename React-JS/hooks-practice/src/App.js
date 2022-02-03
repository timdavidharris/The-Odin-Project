import './App.css';
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);

  const incrementCountUp = () => {
    setCount(count + 1);
  };

  const incrementCountDown = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCountUp}>Count Up</button>
      <button onClick={incrementCountDown}>Count Down</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default App;