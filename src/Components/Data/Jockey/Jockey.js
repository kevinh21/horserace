import React, { useState, useEffect } from "react";
import "./Jockey.css";

const Jockey = (props) => {
  const [jockeys, setJockeys] = useState([]);

  useEffect(() => {
    getJockey();
  }, []);

  const getJockey = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let parseData = JSON.parse(data);
        console.log(parseData);
        setJockeys(parseData);
      });
  };
  // function createJockey() {
  //   let jockeyName = prompt("Enter jockey name");
  //   let totalPurse = prompt("Enter totalPurse");
  //   let rank = prompt("Enter rank");
  //   fetch(`http://localhost:3001/jockeys`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ jockeyName, totalPurse, rank }),
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getJockey();
  //     });
  // }
  // function deleteJockey() {
  //   let jockeyid = prompt("Enter jockeyid");
  //   fetch(`http://localhost:3001/jockeys/${jockeyid}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getJockey();
  //     });
  // }

  const jockeyData = jockeys.map((myJockey, index) => (
    <ul key={index}>
      <li id="jockeyDataWrapper">
        {/* <hr /> */}
        <h id="jockeyDataId"> {myJockey.jockeyid}</h>
        <h id="jockeyDataName"> {myJockey.jockeyName}</h>
        <h id="jockeyDataRank"> {myJockey.jockeyRank}</h>
        <h id="jockeyDataWeight"> {myJockey.weight}</h>
        <h id="jockeyDataHeight"> {myJockey.height}</h>
        <h id="jockeyDataStarts"> {myJockey.starts}</h>
        <h id="jockeyDataFirst"> {myJockey.jockeyFirst}</h>
        <h id="jockeyDataSecond"> {myJockey.jockeySecond}</h>
        <h id="jockeyDataThird"> {myJockey.jockeyThird}</h>
        <h id="jockeyDataTotalPurse"> {myJockey.totalPurse}</h>
        <h id="jockeyDataPerStartPUrse"> {myJockey.perStartPurse}</h>
        <h id="jockeyDataWinPercent"> {myJockey.winPercent + "%"}</h>
        <h id="jockeyDataTopThree"> {myJockey.topThree}</h>
        <h id="jockeyDataTopThreePercent"> {myJockey.topThreePercent + "%"}</h>
        <h id="jockeyDataYears"> {myJockey.years + " "}</h>
      </li>
    </ul>
  ));

  return (
    <div>
      <div id="jockeyListHeader">JOCKEY DATA</div>
      <div id="jockeyHeaderTitles"></div>
      <h id="jockeyListId"> ID</h>
      <h id="jockeyListName"> Name</h>
      <h id="jockeyListRank"> Rank</h>
      <h id="jockeyListWeight"> Weight</h>
      <h id="jockeyListHeight"> Height</h>
      <h id="jockeyListStarts"> Starts</h>
      <h id="jockeyListFirst"> 1st</h>
      <h id="jockeyListSecond"> 2nd</h>
      <h id="jockeyListThird"> 3rd</h>
      <h id="jockeyListTotalPurse"> Total Purse</h>
      <h id="jockeyListPerStartPUrse">Per Start Purse</h>
      <h id="jockeyListWinPercent"> Win%</h>
      <h id="jockeyListTopThree"> Top 3</h>
      <h id="jockeyListTopThreePercent"> Top 3%</h>
      <h id="jockeyListYears"> Years</h>
      <div id="jockeyDataList"> {jockeyData}</div>
    </div>
  );
};
export default Jockey;
