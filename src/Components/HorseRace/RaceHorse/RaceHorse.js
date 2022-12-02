// This component is used to select random horses that will run in the horserace.js component

import "./RaceHorse.css";
import React, { useState, useEffect } from "react";

const RaceHorse = (props) => {
  const [horses, setHorses] = useState([]);

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

  //Select data fields from horses database - Remember to get slice of
  const selectHorse = horses.map((selectHorse) => (
    <>
      {selectHorse.horseid + " . . ."}
      {selectHorse.horseName + " . . ."}
      {selectHorse.sts + " . . ."}
      {selectHorse.horseRank + " . . ."}
      {selectHorse.horseWinnings + " . . ."}
      {selectHorse.winPercent + "%"}
    </>
  ));
  let raceHorses = [selectHorse];

  //Start at a random location for display.
  let offSetNum = raceHorses[
    Math.floor(Math.random() * raceHorses.length)
  ].sort(() => 0.5 - Math.random());

  //Select random number of horses running in the race = min 4
  const userNum = [Math.floor(Math.random() * 10) + 4];

  let raceHorseRadomList = raceHorses[
    Math.floor(Math.random() * raceHorses.length)
  ].sort(() => 0.5 - Math.random());

  raceHorseRadomList = raceHorseRadomList.slice(offSetNum, userNum);

  console.log("kevin", raceHorseRadomList);

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
        <ul id="raceHorseList">
          {raceHorseRadomList.map((displayRaceHorse, index) => (
            <li>
              {index + 1} ----
              {displayRaceHorse}
            </li>
          ))}
        </ul>
        <p id="raceHorsenumberOfHorses">
          User Selects (need input field) Number of Horses in the Race:{" "}
          {userNum}
        </p>
      </div>
    </div>
  );
};

export default RaceHorse;
