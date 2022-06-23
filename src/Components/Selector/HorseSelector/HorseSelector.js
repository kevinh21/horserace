import "./HorseSelector.css";
import React, { useState, useEffect } from "react";

const HorseSelector = (props) => {
  const [horses, setHorses] = useState([]);
  const [horsesName, setHorsesName] = useState([]);
  const [horsesInfo, setHorsesInfo] = useState(horses);

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
        setHorsesInfo(horseData);
      });
  };

  const handleChange = (event) => {
    setHorsesName(event.target.value);
    const horseData = horses.find(findHorse);
    setHorsesInfo(horseData);
  };

  const selectHorse = horses.map((selectHorse, index) => (
    <div key={index}>{selectHorse.horseName}</div>
  ));

  const findHorse = (horse) => {
    return horse.horseName === horsesName;
  };
  const horseData = horses.find(findHorse);
  console.log(horseData);
  return (
    <div>
      <div className="horseSelectorWrapper">
        <form>
          Select A Horse
          <select value={horsesName} onChange={handleChange}>
            {selectHorse.map((nameValue) => (
              <option>{nameValue}</option>
            ))}
          </select>
          <br />
          <div> ID # - Horse Name - Starts - Rank - Winning$ - Win %</div>
          <div>
            {horseData && (
              <>
                {horseData.horseid} - {horseData.horseName} -{horseData.sts}-
                {horseData.horseRank} - {horseData.horseWinnings} -
                {horseData.winPercent}%{" "}
              </>
            )}
          </div>
        </form>
        <h3>Number of Records - {horses.length}</h3>
      </div>
    </div>
  );
};

export default HorseSelector;
