import React, { useState, useEffect } from "react";
import "./Race.css";

const Race = (props) => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    getRace();
  }, []);

  const getRace = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let parseData = JSON.parse(data);
        console.log(parseData);
        setRaces(parseData);
      });
  };
  // function createRace() {
  //   let raceName = prompt("Enter race name");
  //   let totalPurse = prompt("Enter totalPurse");
  //   let rank = prompt("Enter rank");
  //   fetch(`http://localhost:3001/races`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ raceName, totalPurse, rank }),
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getRace();
  //     });
  // }
  // function deleteRace() {
  //   let raceid = prompt("Enter raceid");
  //   fetch(`http://localhost:3001/races/${raceid}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getRace();
  //     });
  // }

  const raceData = races.map((myRace, index) => (
    <ul key={index}>
      <li id="raceDataWrapper">
        {/* <hr /> */}
        <h id="raceDataId"> {myRace.raceid}</h>
        <h id="raceDataEntryFee"> {myRace.entryFee}</h>
        <h id="raceDataPurse"> {myRace.purse}</h>
        <h id="raceDataTime"> {myRace.time}</h>
        <h id="raceDataWinner"> {myRace.winner}</h>
        <h id="raceDataYear"> {myRace.year}</h>
        <h id="raceDataRaceName"> {myRace.raceName}</h>
        <h id="raceDataOwner"> {myRace.owner}</h>
        <h id="raceDataTrainer"> {myRace.trainer}</h>
        <h id="raceDataJockey"> {myRace.jockey}</h>
        <h id="raceDataValue"> {myRace.value}</h>
      </li>
    </ul>
  ));

  return (
    <div>
      <div id="raceDataHeader">
        RACE DATA
        <br /> #{races.length} Listed
        <br /> Out of 8,792
      </div>
      <div id="raceHeaderTitles"></div>
      <h id="raceListId">ID </h>
      <h id="raceListEntryFee">Entry Fee </h>
      <h id="raceListPurse">Purse</h>
      <h id="raceListTime">Time</h>
      <h id="raceListWinner">Winner</h>
      <h id="raceListDate">Date</h>
      <h id="raceListRaceName">Race Name</h>
      <h id="raceListOwner">Owner</h>
      <h id="raceListTrainer">Trainer</h>
      <h id="raceListJockey">Jockey</h>
      <h id="raceListValue">Value</h>

      <h id="raceData"> {raceData}</h>
    </div>
  );
};
export default Race;
