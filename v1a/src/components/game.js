import React, { useState } from 'react';
import Choice from './choice';
import Selection from './selection';
import Score from './score';
import Results from './results';
import Start from './start';

const CHOICES = ['rock', 'paper', 'scissors'];

function Game() {
  const [gameState, setGameState] = useState({
    userChoice: null,
    computerChoice: null,
    userScore: 0,
    computerScore: 0,
    winner: null,
  });
  const [isStarted, setIsStarted] = useState(false);

  const handleChoiceClick = (choice) => {
    const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    const winner = evaluateWinner(choice, computerChoice);

    if (winner === 'user') {
      setGameState({
        ...gameState,
        userChoice: choice,
        computerChoice: computerChoice,
        userScore: gameState.userScore + 1,
        winner: winner,
      });
    } else if (winner === 'computer') {
      setGameState({
        ...gameState,
        userChoice: choice,
        computerChoice: computerChoice,
        computerScore: gameState.computerScore + 1,
        winner: winner,
      });
    } else {
      setGameState({
        ...gameState,
        userChoice: choice,
        computerChoice: computerChoice,
        winner: winner,
      });
    }
  };

  const handleResetClick = () => {
    setGameState({
      userChoice: null,
      computerChoice: null,
      userScore: 0,
      computerScore: 0,
      winner: null,
    });
    setIsStarted(false);
  };

  const handlePlayAgainClick = () => {
    setGameState({
      userChoice: null,
      computerChoice: null,
      userScore: 0,
      computerScore: 0,
      winner: null,
    });
  };

  const evaluateWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'tie';
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'user';
    } else {
      return 'computer';
    }
  };

  if (!isStarted) {
    return <Start onStartClick={() => setIsStarted(true)} />;
  }

  if (gameState.winner) {
    return (
      <div>
        <Results onReset={handleResetClick} winner={gameState.winner} />      
        <Selection userChoice={gameState.userChoice} computerChoice={gameState.computerChoice} />
        <Score userScore={gameState.userScore} computerScore={gameState.computerScore} />
      </div>
    );
  }

  return (
    <div>
      <Choice onClick={handleChoiceClick} />
      <Selection userChoice={gameState.userChoice} computerChoice={gameState.computerChoice} />
      <Score userScore={gameState.userScore} computerScore={gameState.computerScore} />
    </div>
  );
}

export default Game;