import "./HorseSelector.css";
import React, { useState, useEffect } from "react";

const HorseSelector = (props) => {
  const [horses, setHorses] = useState([]);
  const [horseValue, setHorseValue] = useState([]);

  useEffect(() => {
    getHorse();
  }, []);

  const getHorse = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let parseData = JSON.parse(data);
        console.log(parseData);
        setHorses(parseData);
      });
  };

  const selectHorse = horses.map((selectHorse, index) => (
    <div key={index}>{selectHorse.horseName}</div>
  ));
  const handleChange = (event) => {
    setHorseValue(event.target.value);
  };
  return (
    <div>
      <div className="horseSelectorWrapper">
        <form>
          <label id="selectAHorse">
            Select A Horse
            <select value={horseValue} onChange={handleChange}>
              {selectHorse.map((option) => (
                <option>{option}</option>
              ))}
              console.log("hello", {selectHorse});
            </select>
          </label>
          <br />
          Your Selected Horse is: {horseValue}
        </form>
      </div>
    </div>
  );
};
export default HorseSelector;
