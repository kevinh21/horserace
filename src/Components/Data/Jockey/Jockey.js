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

  //    TO DO ITEMS
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
      <ul className="jockeyDataWrapper">
        {/* <hr /> */}
        <li id="jockeyDataId"> {myJockey.jockeyid}</li>
        <li id="jockeyDataName"> {myJockey.jockeyName}</li>
        <li id="jockeyDataRank"> {myJockey.jockeyRank}</li>
        <li id="jockeyDataWeight"> {myJockey.weight}</li>
        <li id="jockeyDataHeight"> {myJockey.height}</li>
        <li id="jockeyDataStarts"> {myJockey.starts}</li>
        <li id="jockeyDataFirst"> {myJockey.jockeyFirst}</li>
        <li id="jockeyDataSecond"> {myJockey.jockeySecond}</li>
        <li id="jockeyDataThird"> {myJockey.jockeyThird}</li>
        <li id="jockeyDataTotalPurse"> {myJockey.totalPurse}</li>
        <li id="jockeyDataPerStartPUrse"> {myJockey.perStartPurse}</li>
        <li id="jockeyDataWinPercent">{myJockey.jockeyWinPercent + "%"}</li>
        <li id="jockeyDataTopThree"> {myJockey.topThree}</li>
        <li id="jockeyDataTopThreePercent">{myJockey.topThreePercent + "%"}</li>
        <li id="jockeyDataYears"> {myJockey.years + " "}</li>
      </ul>
      {/* {console.log(myJockey)} */}
    </ul>
  ));
  // console.log(myJockey);
  return (
    <div>
      <div id="jockeyListHeader">
        JOCKEY DATA
        <br /> #{jockeys.length} Listed
        <br />
      </div>
      <div id="jockeyHeaderTitles">
        <ul className="jockeyColumnTitles">
          <li> ID</li>
          <li> Name</li>
          <li> Rank</li>
          <li> Wt.</li>
          <li> Ht.</li>
          <li> Starts</li>
          <li> 1st</li>
          <li> 2nd</li>
          <li> 3rd</li>
          <li> Total $$</li>
          <li> Start $$</li>
          <li> Win%</li>
          <li> Top 3</li>
          <li> Top 3%</li>
          <li> Years</li>
        </ul>
      </div>
      <div id="jockeyDataList">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {jockeyData}
      </div>
    </div>
  );
};
export default Jockey;
