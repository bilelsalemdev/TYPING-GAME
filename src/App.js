import "./App.css";
import React from "react";

import useGame from "./useGame";
function App() {
  const {
    text,
    timeRemaining,
    isTimeRunning,
    countWord,
    handleChange,
    startGame,
    textareaRef,
  } = useGame(10);
  return (
    <div>
      <h1>TYPING GAME</h1>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
        ref={textareaRef}
      />
      <h4>time Remaining : {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        {" "}
        START
      </button>
      <h1>count Word : {countWord}</h1>
    </div>
  );
}

export default App;

