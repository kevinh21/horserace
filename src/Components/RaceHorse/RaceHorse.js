import "./RaceHorse.css";
import React, { useState, useEffect } from "react";
// import Counter from "../Utility/Counter";

const RaceHorse = (props) => {
  const [horses, setHorses] = useState([]);
  const [horseCounter, setHorseCounter] = useState(1);

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

  const selectHorse = horses.map((selectHorse) => (
    <>
      {/* key={index} */}
      {selectHorse.horseid + " . . ."}
      {selectHorse.horseName + " . . ."}
      {selectHorse.sts + " . . ."}
      {selectHorse.horseRank + " . . ."}
      {selectHorse.horseWinnings + " . . ."}
      {selectHorse.winPercent + "%"}
    </>
  ));
  console.log(selectHorse);

  // Select a random set of horses to run in the race
  let raceHorses = [selectHorse];

  //Begin selection from random location in raceHorses to start displaying data
  let num = raceHorses[Math.floor(Math.random() * raceHorses.length)].sort(
    () => 0.5 - Math.random()
  );

  //Select random number of horses running in the race = min 4
  const userNum = [Math.floor(Math.random() * 10) + 4];

  let raceHorse = raceHorses[
    Math.floor(Math.random() * raceHorses.length)
  ].sort(() => 0.5 - Math.random());

  raceHorse = raceHorse.slice(num, userNum);

  console.log(raceHorse);

  return (
    <div>
      <div className="horseSelectorWrapper">
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
        <div id="raceHorseList">
          <ul>
            {raceHorse.map((myhorse, index) => (
              <li>
                {index + 1} -------
                {myhorse}----
              </li>
            ))}
          </ul>
        </div>
        <p id="raceHorsenumberOfHorses">
          User Selects (need input field) Number of Horses in the Race:{userNum}
        </p>
      </div>
    </div>
  );
};

export default RaceHorse;
