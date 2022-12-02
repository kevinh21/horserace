//set maximum time for race which is the RACETIME(min,max) function
//get-set random spaces movement value
//add that number to cumulative total
//subtract cumulative total from max value
//if greater than "negative" max value, get max value from other horses
//compare "subtract" values to find longest length

import React, { useState, useEffect, useRef } from "react";

// Set random raceTime
function raceTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set random number of spaces to move
function moveNumSpaces(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const CalcMovement = () => {
  const [seconds, setSeconds] = useState(raceTime(90, 150));
  const [spaces, setSpaces] = useState(moveNumSpaces(0, 4));

  // const [startRace, setStartRace] = useState();

  const startTimer = () => {
    //do something here
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <section id="calDurationTimerButtons">
          <button onClick={startTimer}>Start Timer</button>
        </section>
        {seconds} seconds have elapsed since mounting.
      </header>

      <div>
        <button onClick={() => setSpaces(raceTime(0, 4))}>Click me</button>
      </div>
    </div>
  );
};

export default CalcMovement;

// let offSetNum = Math.floor(Math.random() * 100);

// function raceTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function CalcMovement() {
//   const [randomInput, setRandomInput] = useState("");
//   const [seconds, setSeconds] = useState(raceTime(5, 15));

//   const renders = useRef(0);
//   const inputRef = useRef();
//   const timerId = useRef(raceTime(5, 15));

//   const startTimer = () => {
//     timerId.current = setInterval(() => {
//       renders.current++;
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//     inputRef.current.focus();
//     console.log(inputRef.current);
//     return () => clearInterval(timerId);
//   };

//   return (
//     <div className="App">
//       <br />
//       <br />
//       <section id="calDurationTimerButtons">
//         <button onClick={startTimer}>Start Timer</button>
//       </section>
//       <br />
//       <br />
//       <div id="calDurationSeconds">Seconds: {seconds}</div>
//       <br />
//       <br />
//       <p>{randomInput}</p>
//     </div>
//   );
// }

// export default CalcMovement;
