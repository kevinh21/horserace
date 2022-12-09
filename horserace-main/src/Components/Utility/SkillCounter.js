import React, { useState } from "react";
import { Link } from "react-router-dom";
import HorseRace from "../HorseRace/HorseRace";
import "./SkillCounter.css";
import "./InputCalcs.css";

function Counter(props) {
  const [horseCount, setHorseCount] = useState(1);
  const [jockeyCount, setJockeyCount] = useState(0);
  const [enduranceCount, setEnduranceCountt] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [getTotal, setGetTotal] = useState(0);

  function getTotalCount() {
    setGetTotal((horseCount) => horseCount - 1);
  }

  function horseDecrementCount() {
    setHorseCount((prevCount) => prevCount - 1);
  }
  function horseIncrementCount() {
    setHorseCount((prevCount) => prevCount + 1);
  }

  function jockeyDecrementCount() {
    setJockeyCount((prevCount) => prevCount - 1);
  }
  function jockeyIncrementCount() {
    setJockeyCount((prevCount) => prevCount + 1);
  }

  function enduranceDecrementCount() {
    setEnduranceCountt((prevCount) => prevCount - 1);
  }
  function enduranceIncrementCount() {
    setEnduranceCountt((prevCount) => prevCount + 1);
  }

  function experienceDecrementCount() {
    setExperienceCount((prevCount) => prevCount - 1);
  }
  function experienceIncrementCount() {
    setExperienceCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <div className="counterWrapper">
        <button onClick={horseDecrementCount}> - </button>
        <button onClick={horseIncrementCount}> + </button>
        <span> Horse Speed = {horseCount}</span>
        <br />
        <button onClick={jockeyDecrementCount}> - </button>
        <button onClick={jockeyIncrementCount}> + </button>
        <span> Jockey Skill = {jockeyCount} </span>
        <br />
        <button onClick={enduranceDecrementCount}> - </button>
        <button onClick={enduranceIncrementCount}> + </button>
        <span> Horse Endurance = {enduranceCount} </span>
        <br />
        <button onClick={experienceDecrementCount}> - </button>
        <button onClick={experienceIncrementCount}> + </button>

        <span> Horse Experience = {experienceCount} </span>

        <form onSubmit={HorseRace}>
          <label id="totalPoints">
            Total Points
            <input
              id="totalPoints"
              type="text"
              value={
                experienceCount + enduranceCount + horseCount + jockeyCount
              }
              onChange={(e) => setGetTotal(e.target.value)}
            />
          </label>
          {/* <input type="submit" value="Begin the Race" /> */}
          <Link to="/landingPage/horseRace" className="beginRace">
            Begin Race
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Counter;
