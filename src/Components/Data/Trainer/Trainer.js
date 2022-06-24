import React, { useState, useEffect } from "react";
import "./Trainer.css";

const Trainer = (props) => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getTrainer();
  }, []);

  const getTrainer = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let parseData = JSON.parse(data);
        console.log("trainer", parseData);
        setTrainers(parseData);
      });
  };
  function createTrainer() {
    let trainerName = prompt("Enter trainer name");
    let totalPurse = prompt("Enter totalPurse");
    let rank = prompt("Enter rank");
    fetch(`http://localhost:3001/trainers`, {
      method: "POST",
      s: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trainerName, totalPurse, rank }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getTrainer();
      });
  }
  function deleteTrainer() {
    let trainerid = prompt("Enter trainerid");
    fetch(`http://localhost:3001/trainers/${trainerid}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getTrainer();
      });
  }
  /////////////////////////////////////////////////////////////////////////////

  const trainerList = trainers.map((myTrainer, index) => (
    <ul key={index}>
      <div id="trainerDataWrapper">
        {/* <hr /> */}
        <h id="trainerDataId"> {myTrainer.trainerid}</h>
        <h id="trainerDataTrainerName"> {myTrainer.trainerName}</h>
        <h id="trainerDataRank"> {myTrainer.trainerRank}</h>
        <h id="trainerDataStarts">{myTrainer.starts}</h>
        <h id="trainerDataStarters"> {myTrainer.starters}</h>
        <h id="trainerDataFirst"> {myTrainer.trainerFirst}</h>
        <h id="trainerDataSecond"> {myTrainer.trainerSecond}</h>
        <h id="trainerDataThird"> {myTrainer.trainerThird}</h>
        <h id="trainerDataEarnings"> {myTrainer.earnings}</h>
        <h id="trainerDataPerStart"> {myTrainer.perStart}</h>
        <h id="trainerDataWinPercent"> {myTrainer.winPercent + "%"}</h>
        <h id="trainerDataWpsStarts"> {myTrainer.wpsStart}</h>
        <h id="trainerDataWpsStarter"> {myTrainer.wpsStarter}</h>
      </div>
    </ul>
  ));
  return (
    <div>
      <div id="trainerListHeader">
        TRAINER DATA
        <br /> #{trainers.length} Listed
        <br /> Out of 2,748
      </div>
      <div id="trainerListTitles"></div>
      <h id="trainerListId">ID </h>
      <h id="trainerListTrainerName">Trainer </h>
      <h id="trainerListRank">Rank</h>
      <h id="trainerListStarts">Starts</h>
      <h id="trainerListStarters">Starters</h>
      <h id="trainerListFirst">1st</h>
      <h id="trainerListSecond">2nd </h>
      <h id="trainerListThird">3rd</h>
      <h id="trainerListEarnings">Earnings </h>
      <h id="trainerListStarts">Per Start </h>
      <h id="trainerListWinPercent">Win % </h>
      <h id="trainerListWpsStart">wps Starts </h>
      <h id="trainerListWpsStarter">wps Starter </h>
      <h id="trainerList"> {trainerList}</h>
    </div>
  );
};
export default Trainer;
