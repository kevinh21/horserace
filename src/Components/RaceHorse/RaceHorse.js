import "./RaceHorse.css";
import React, { useState, useEffect } from "react";

const RaceHorse = (props) => {
  const [horses, setHorses] = useState([]);
  // const [horsesName, setHorsesName] = useState([]);

  //retrieve data from database
  useEffect(() => {
    getHorse();
  }, []);

  //Get initial array of Horse Objects
  const getHorse = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let parseData = JSON.parse(data);
        setHorses(parseData);
      });
  };

  //Select data fields from horses database
  const selectHorse = horses.map((selectHorse, index) => (
    <div key={index}>
      {selectHorse.horseid + " . . ."} {selectHorse.horseName + " . . ."}
      {selectHorse.sts + " . . ."}
      {selectHorse.horseRank + " . . ."}
      {selectHorse.horseWinnings + " . . ."} {selectHorse.winPercent + "%"}
    </div>
  ));

  // Select a random set of horses to run in the race
  let raceHorses = [selectHorse];
  let raceHorse = raceHorses[
    Math.floor(Math.random() * raceHorses.length)
  ].sort(() => 0.5 - Math.random());
  //Begin selection from random location in raceHorses to begin displaying data
  let num = raceHorses[Math.floor(Math.random() * raceHorses.length)].sort(
    () => 0.5 - Math.random()
  );

  //Select random number of horses running in the race = min 4
  const userNum = [Math.floor(Math.random() * 10) + 4];

  return (
    <div>
      <div className="horseSelectorWrapper">
        {/* <form>  allow user inputs to SELECT NUMBER OF HORSES IN THIS RACE
         */}
        <br />
        <div />
        <div id="alsoRan">
          Horses ALSO Running In This Race
          <div />
          <br />
          <div id="alsoTitles">
            ID # --- Horse Name ---- Starts ----- Rank ---- Winning$ ---- Win %
          </div>
        </div>
        ========================================
        <br />
        <div id="raceHorseList">{raceHorse.slice(num, userNum)}</div>
        <p id="raceHorsenumberOfHorses">
          Number of Horses in the Race: {userNum}
        </p>
        {/* </form> */}
      </div>
    </div>
  );
};

export default RaceHorse;
