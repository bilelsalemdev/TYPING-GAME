import { useRef, useState, useEffect } from "react";
export default function useGame(startingGame = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingGame);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [countWord, setCountWord] = useState(0);
  const textareaRef = useRef(null);

  function startGame() {
    setText("");
    setIsTimeRunning(true);
    setTimeRemaining(startingGame);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setCountWord(calculateWords(text));
  }
  function calculateWords(text) {
    const words = text.trim().split(" ");
    return words.filter((word) => word !== "").length;
  }

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);
  return {
    text,
    timeRemaining,
    isTimeRunning,
    countWord,
    handleChange,
    startGame,
    textareaRef,
  };
}
