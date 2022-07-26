// import "./HorseSelector.css";
import React, { useState, useEffect } from "react";

const HorseSelector = (props) => {
  const [horses, setHorses] = useState([]);
  const [horsesName, setHorsesName] = useState([]);

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
        setHorses(parseData);
      });
  };
  // console.log(setHorses);
  /////////////////////////////////////////////////
  const handleChange = (event) => {
    setHorsesName(event.target.value);
  };

  const selectHorse = horses.map((selectHorse, index) => (
    <div key={index}>{selectHorse.horseName}</div>
  ));

  const findHorse = (horse) => {
    return horse.horseName === horsesName;
  };
  console.log(findHorse);

  const horseData = horses.find(findHorse);
  console.log(horseData);

  return (
    <div>
      <p className="horseSelectorWrapper">
        Select A Horse
        <select value={horsesName} onChange={handleChange}>
          {selectHorse.map((nameValue) => (
            <option>{nameValue}</option>
          ))}
          {/* {console.log(horsesName)} */}
        </select>
        <br />
        <div> ID # - Horse Name - Starts - Rank - Winning$ - Win %</div>
        <div>
          {horseData && (
            <>
              {horseData.horseid} - {horseData.horseName} -{horseData.sts}-
              {horseData.horseRank} - {horseData.horseWinnings} -
              {horseData.winPercent}%
            </>
          )}
        </div>
      </p>
    </div>
  );
};

export default HorseSelector;
