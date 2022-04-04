// App.tsx
import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [clicks, setClicks] = useState(0);

  function handleClick(type: string) {
    if (type === 'increment' && clicks >= 0) {
      setClicks((prev) => prev + 1);
    }
    if (type === 'decrement' && clicks > 0) {
      setClicks((prev) => prev - 1);
    }
  }

  return (
    <>
      <h1>Hello World, from React!</h1>
      <button onClick={() => handleClick('increment')}>+</button>
      <button onClick={() => handleClick('decrement')}>-</button>

      <span>clicks: {clicks}</span>
    </>
  );
};
