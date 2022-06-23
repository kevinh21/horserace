import "./JockeySelector.css";
import React, { useState, useEffect } from "react";

const JockeySelector = (props) => {
  const [jockeys, setJockeys] = useState([]);
  const [jockeyValue, setJockeyValue] = useState([]);

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
        // console.log(parseData);
        setJockeys(parseData);
      });
  };

  const selectJockey = jockeys.map((selectJockey, index) => (
    <div key={index}>{selectJockey.jockeyName}</div>
  ));
  const handleChange = (event) => {
    setJockeyValue(event.target.value);
  };
  return (
    <div>
      <div className="jockeySelectorWrapper">
        <form>
          <label id="selectAJockey">
            Select A Jockey
            <select value={jockeyValue} onChange={handleChange}>
              {selectJockey.map((option) => (
                <option>{option}</option>
              ))}
              {/* console.log("hello", {selectJockey}); */}
            </select>
          </label>{" "}
          <br />
          Your Selected Jockey is: {jockeyValue}
        </form>
      </div>
    </div>
  );
};
export default JockeySelector;
