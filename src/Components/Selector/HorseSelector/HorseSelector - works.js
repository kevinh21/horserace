import "./HorseSelector.css";
import React, { useState, useEffect } from "react";

const HorseSelector = (props) => {
  const [horses, setHorses] = useState([]);
  const [horsesName, setHorsesName] = useState([]);
  const [horsesIdent, setHorsesIdent] = useState([]);

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
  ////////////////// Drop down selections ////////////////////////////////////////////

  const handleChange = (event) => {
    setHorsesName(event.target.value);
  };
  console.log(horsesName);

  const selectHorse = horses.map((selectHorse, index) => (
    <div key={index}>{selectHorse.horseName}</div>
  ));

  function findHorse(horse) {
    return horse.horseName === horsesName;
  }
  const horseOut = horses.find(findHorse);

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
          Your Selected Horse is: {horsesName}
        </form>
        <h3>Number of Records - {horses.length}</h3>
      </div>
      <div>
        Horse Stats: # {horseOut.horseid} - {horseOut.horseName} -
        {horseOut.horseRank} -{horseOut.horseWinnings} - {horseOut.winPercent}%
      </div>
    </div>
  );
};
export default HorseSelector;

// const array1 = horses;
//   const iterator1 = array1.entries();
//   console.log(iterator1.next().value);
//   console.log(iterator1.next().value);

//   const cows = array1.find((element) => element > 1);
//   console.log(cows);
//   console.log(Array.isArray(horses));

// const array = horses;
//   const arrayEntries = array.entries();

//   for (let element of arrayEntries) {
//     console.log(element);
//   }

// function filterBytag(tag){
//   const result = data.filter((dataItem) => {
//     if(dataItem.tags.includes(tag)){
//       return true;
//     }
//     return false;
//   });
//   return result;
// }
