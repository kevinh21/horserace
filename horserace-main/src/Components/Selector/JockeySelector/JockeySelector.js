// TODO    BUILD IN ERROR CHECKING FOR VALID DATA ie; fieldID matches

import React, { useState, useEffect } from "react";

const JockeySelector = (props) => {
  const [jockeys, setJockeys] = useState([]);
  const [jockeysName, setJockeysName] = useState([]);

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
        setJockeys(parseData);
      });
  };
  const handleChange = (event) => {
    setJockeysName(event.target.value);
  };

  const selectJockey = jockeys.map((selectJockey, index) => (
    <div key={index}>{selectJockey.jockeyName}</div>
  ));

  const findJockey = (jockey) => {
    return jockey.jockeyName === jockeysName;
  };
  console.log(findJockey);

  const jockeyData = jockeys.find(findJockey);
  console.log(jockeyData);

  return (
    <div>
      <p className="jockeySelectorWrapper">
        Select A Jockey
        <select value={jockeysName} onChange={handleChange}>
          {selectJockey.map((nameValue) => (
            <option>{nameValue}</option>
          ))}
        </select>
        <br />
        <div> ID # - Jockey Name - Starts - Rank - Winning$ - Win %</div>
        <div>
          {jockeyData && (
            <>
              {jockeyData.jockeyid} - {jockeyData.jockeyName} -
              {jockeyData.starts}-{jockeyData.jockeyRank} -{" "}
              {jockeyData.totalPurse} -{jockeyData.winPercent}%
            </>
          )}
        </div>
      </p>
    </div>
  );
};

export default JockeySelector;
