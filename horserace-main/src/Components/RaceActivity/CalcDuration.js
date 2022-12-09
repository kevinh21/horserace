import "./CalcDuration.css";
import { useState, useRef } from "react";

// let offSetNum = Math.floor(Math.random() * 100);

function raceTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CalcDuration() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(raceTime(5, 15));

  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef(raceTime(5, 15));

  const handleChange = (e) => {
    setRandomInput(raceTime(5, 15));
    renders.current--;
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current--;
      setSeconds((prev) => prev - 1);
    }, 1000);
    inputRef.current.focus();
    console.log(inputRef.current);
    return () => clearInterval(timerId);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    inputRef.current.focus();
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current--;
      setSeconds(raceTime(5, 15));
    }
    inputRef.current.focus();
  };
  console.log(inputRef);
  return (
    <div className="App">
      <input
        id="calcDurationBlankInput"
        ref={inputRef}
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>Renders: {renders.current}</p>
      <br />
      <br />
      <section id="calDurationTimerButtons">
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Pause Timer</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <br />
      <br />
      <div id="calDurationSeconds">Seconds: {seconds}</div>
      {/* {startTimer.endTime} hello */}
      <br />
      <br />
      <p>{randomInput}</p>
    </div>
  );
}

export default CalcDuration;
