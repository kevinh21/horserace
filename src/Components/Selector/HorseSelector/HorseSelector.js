import "./HorseSelector.css";
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

  /*
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
  
  const arr = ['b', 'c', 'a', 'd'];
  console.log(getMultipleRandom(arr, 2)); // 👉️ ['d', 'a'];
  console.log(getMultipleRandom(arr, 3)); // 👉️ ['b', 'a', 'c']
*/

  const handleChange = (event) => {
    setHorsesName(event.target.value);
  };

  const selectHorse = horses.map((selectHorse, index) => (
    <div key={index}>{selectHorse.horseName}</div>
  ));

  const findHorse = (horse) => {
    return horse.horseName === horsesName;
  };
  const horseData = horses.find(findHorse);
  // console.log(horseData);

  // let items = { horseData };
  // let item = items[Math.floor(Math.random() * items.length)];
  // console.log(items);
  // console.log(item);

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

        {/* <h3>Number of Horses - {item}</h3> */}
      </div>
    </div>
  );
};

export default HorseSelector;
