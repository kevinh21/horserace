import "./RaceJockey.css";
import React, { useState, useEffect } from "react";

const RaceJockey = (props) => {
  const [jockeys, setJockeys] = useState([]);

  //retrieve data from database
  useEffect(() => {
    getJockey();
  }, []);

  //Get initial array of Jockey Objects
  const getJockey = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let parseData = JSON.parse(data);
        setJockeys(parseData);
      });
  };

  //Select data fields from jockeys database - Remember to get slice of
  const selectJockey = jockeys.map((selectJockey) => (
    <>
      {selectJockey.jockeyid + " . . ."}
      {selectJockey.jockeyName + " . . ."}
      {selectJockey.sts + " . . ."}
      {selectJockey.jockeyRank + " . . ."}
      {selectJockey.jockeyWinnings + " . . ."}
      {selectJockey.winPercent + "%"}
    </>
  ));
  let raceJockeys = [selectJockey];

  let offSetNum = raceJockeys[
    Math.floor(Math.random() * raceJockeys.length)
  ].sort(() => 0.5 - Math.random());

  //Select random number of jockeys running in the race = min 4
  const userNum = [Math.floor(Math.random() * 10) + 4];

  let raceJockeyRadomList = raceJockeys[
    Math.floor(Math.random() * raceJockeys.length)
  ].sort(() => 0.5 - Math.random());

  raceJockeyRadomList = raceJockeyRadomList.slice(offSetNum, userNum);

  console.log("kevin", raceJockeyRadomList);

  return (
    <div>
      <div className="jockeySelectorWrapper">
        <br />
        <div />
        <div id="alsoRan">
          Jockeys ALSO Running In This Race
          <div />
          <br />
          <div id="alsoTitles">
            ID # --- Jockey Name ---- Starts ----- Rank ---- Winning$ ---- Win %
          </div>
        </div>
        ========================================
        <br />
        <ul id="raceJockeyList">
          {raceJockeyRadomList.map((displayRaceJockey, index) => (
            <li>
              {index + 1} ----
              {displayRaceJockey}
            </li>
          ))}
        </ul>
        <p id="raceJockeynumberOfJockeys">
          User Selects (need input field) Number of Jockeys in the Race:{" "}
          {userNum}
        </p>
      </div>
    </div>
  );
};

export default RaceJockey;
