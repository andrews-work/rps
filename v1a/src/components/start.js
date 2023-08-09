// Start.js
import React, { useState } from 'react';
import Choice from './choice';

function Start() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStartClick = () => {
    setIsStarted(true);
  };

  if (isStarted) {
    return <Choice />;
  }

  return (
    <div>
      <h2>Welcome to the Game!</h2>
      <button onClick={handleStartClick}>Start Game</button>
    </div>
  );
}

export default Start;