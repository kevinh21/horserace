import "./JockeySelector.css";
import React, { useState, useEffect } from "react";

const JockeySelector = (props) => {
  const [jockeys, setJockeys] = useState([]);
  const [jockeysName, setJockeysName] = useState([]);
  const [jockeysInfo, setJockeysInfo] = useState(jockeys);

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
    const jockeyData = jockeys.find(findJockey);
    setJockeysInfo(jockeyData);
  };

  const selectJockey = jockeys.map((selectJockey, index) => (
    <div key={index}>{selectJockey.jockeyName}</div>
  ));

  const findJockey = (jockey) => {
    return jockey.jockeyName === jockeysName;
  };
  const jockeyData = jockeys.find(findJockey);
  // console.log(jockeyData);
  return (
    <div>
      <p className="jockeySelectorWrapper">
        <form>
          Select A Jockey
          <select value={jockeysName} onChange={handleChange}>
            {selectJockey.map((nameValue) => (
              <option>{nameValue}</option>
            ))}
          </select>
          <br />
          <div> ID # - Jockey Name - Rank - Weight - Height - Win %</div>
          <div>
            {jockeyData && (
              <>
                {jockeyData.jockeyid} - {jockeyData.jockeyName} -
                {jockeyData.jockeyRank} -{jockeyData.weight}-{jockeyData.height}
                - {jockeyData.winPercent}%
              </>
            )}
          </div>
        </form>
        {/* <h3>Number of Jockeys - {jockeys.length}</h3> */}
      </p>
    </div>
  );
};
export default JockeySelector;
