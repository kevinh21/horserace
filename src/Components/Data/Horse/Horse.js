import React, { useState, useEffect } from "react";
import "./Horse.css";

const Horse = (props) => {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    getHorse();
  }, []);

  const getHorse = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((data) => {
        console.log(data);

        let parseData = JSON.parse(data);
        console.log(parseData);
        setHorses(parseData);
      });
  };

  const horseList = horses.map((myHorse, index) => (
    <ul key={index}>
      <li id="myhorseListDataWrapper">
        {/* <hr /> */}
        <h id="horseListDataId"> {myHorse.horseid}</h>
        <h id="horseListDataHorseName"> {myHorse.horseName}</h>
        <h id="horseListDataSireName"> {myHorse.sireName}</h>
        <h id="horseListDataWinnings">{myHorse.horseWinnings}</h>
        <h id="horseListDataRank"> {myHorse.horseRank}</h>
        <h id="horseListDataStarts"> {myHorse.sts}</h>
        <h id="horseListDataWinPercent"> {myHorse.winPercent + "%"}</h>
        <h id="horseListDataFirst"> {myHorse.horseFirst}</h>
        <h id="horseListDataSecond"> {myHorse.horseSecond}</h>
        <h id="horseListDataThird"> {myHorse.horseThird}</h>
      </li>
    </ul>
  ));

  return (
    <div>
      <div id="horseDataHeader">
        HORSE DATA <br /> #{horses.length} Listed
        <br /> Out of 6,027
      </div>
      <div className="horseDataHeaderTitles"></div>
      <h id="horseDataListHeaderID">ID </h>
      <h id="horseDataListHeaderHorseName">Horse Name</h>
      <h id="horseDataListHeaderSireName">Sire Name</h>
      <h id="horseDataListHeaderWinnings">Winnings</h>
      <h id="horseDataListHeaderRank">Rank</h>
      <h id="horseDataListHeaderStarts">Starts</h>
      <h id="horseDataListHeaderWinPercent">Win Percent</h>
      <h id="horseDataListHeaderFirst">1st</h>
      <h id="horseDataListHeaderSecond">2nd</h>
      <h id="horseDataListHeaderThird">3rd</h>
      <div> {horseList}</div>
    </div>
  );
};
export default Horse;
