import React, { useState } from 'react';
import Choice from './choice';
import Result from './results';

function App() {
  const [showResult, setShowResult] = useState(false);

  const handleChoiceClick = () => {
    setShowResult(true);
  };

  return (
    <div className="App">
      {!showResult && <Choice onChoiceClick={handleChoiceClick} />}
      {showResult && <Result />}
    </div>
  );
}

export default App;