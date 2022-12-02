import React, { useState, useEffect } from "react";
import "./PastRaces.css";

const PastRaces = (props) => {
  const [pastRaces, setPastRaces] = useState([]);

  useEffect(() => {
    getPastRace();
  }, []);

  const getPastRace = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let parseData = JSON.parse(data);
        console.log(parseData);
        setPastRaces(parseData);
      });
  };
  // function createPastRaces() {
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
  //       getPastRaces();
  //     });
  // }
  // function deletePastRaces() {
  //   let raceid = prompt("Enter raceid");
  //   fetch(`http://localhost:3001/races/${raceid}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getPastRaces();
  //     });
  // }

  const pastRacesData = pastRaces.map((myPastRaces, index) => (
    <ul key={index}>
      <li id="pastRacesDataWrapper">
        <h id="pastRacesDataId"> {myPastRaces.pastraceid}</h>
        <h id="pastRacesDataEntryFee"> {myPastRaces.entryFee}</h>
        <h id="pastRacesDataPurse"> {myPastRaces.purse}</h>
        <h id="pastRacesDataTime"> {myPastRaces.time}</h>
        <h id="pastRacesDataWinner"> {myPastRaces.winner}</h>
        <h id="pastRacesDataYear"> {myPastRaces.year}</h>
        <h id="pastRacesDataRacesName"> {myPastRaces.raceName}</h>
        <h id="pastRacesDataOwner"> {myPastRaces.owner}</h>
        <h id="pastRacesDataTrainer"> {myPastRaces.trainer}</h>
        <h id="pastRacesDataJockey"> {myPastRaces.jockey}</h>
        <h id="pastRacesDataValue"> {myPastRaces.value}</h>
      </li>
    </ul>
  ));

  return (
    <div>
      <div id="pastRacesDataHeader">
        PAST RACES
        <br /> #{pastRaces.length} Listed
        <br />
      </div>
      <div id="pastRacesHeaderTitles"></div>
      <h id="pastRacesListId">ID </h>
      <h id="pastRacesListEntryFee">Entry Fee </h>
      <h id="pastRacesListPurse">Purse</h>
      <h id="pastRacesListTime">Time</h>
      <h id="pastRacesListWinner">Winner</h>
      <h id="pastRacesListDate">Date</h>
      <h id="pastRacesListpastRacesName">Race Name</h>
      <h id="pastRacesListOwner">Owner</h>
      <h id="pastRacesListTrainer">Trainer</h>
      <h id="pastRacesListJockey">Jockey</h>
      <h id="pastRacesListValue">Value</h>

      <h id="pastRacesData"> {pastRacesData}</h>
    </div>
  );
};
export default PastRaces;
