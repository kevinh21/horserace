import "./RandomHorse.css";
import React, { useState, useEffect } from "react";

const RandomHorse = (props) => {
  const [horses, setHorses] = useState([]);
  const [horsesName, setHorsesName] = useState([]);
  const [horsesName1, setHorsesName1] = useState([]);
  const [horsesName2, setHorsesName2] = useState([]);
  const [horsesName3, setHorsesName3] = useState([]);

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

  const selectHorse = horses.map((selectHorse, index) => (
    <div key={index}>{selectHorse.horseid}</div>
  ));

  const handleChange = (event) => {
    setHorsesName(event.target.value);
  };
  const findHorse = (horse) => {
    return horse.horseid === horsesName;
  };
  const horseData = horses.find(findHorse);

  const selectHorse1 = horses.map((selectHorse1, index) => (
    <div key={index}>{selectHorse1.horseid}</div>
  ));
  const handleChange1 = (event) => {
    setHorsesName(event.target.value);
  };
  const findHorse1 = (horse) => {
    return horse.horseid === horsesName1;
  };
  const horseData1 = horses.find(findHorse1);

  const selectHorse2 = horses.map((selectHorse2, index) => (
    <div key={index}>{selectHorse2.horseid}</div>
  ));
  const handleChange2 = (event) => {
    setHorsesName(event.target.value);
  };
  const findHorse2 = (horse) => {
    return horse.horseid === horsesName2;
  };
  const horseData2 = horses.find(findHorse2);

  const selectHorse3 = horses.map((selectHorse3, index) => (
    <div key={index}>{selectHorse3.horseid}</div>
  ));
  const handleChange3 = (event) => {
    setHorsesName(event.target.value);
  };
  const findHorse3 = (horse) => {
    return horse.horseid === horsesName3;
  };
  const horseData3 = horses.find(findHorse3);

  console.log(horseData);
  console.log(horseData1);
  console.log(horseData2);

  let items = [selectHorse];
  let item = items[Math.floor(Math.random() * items.length * 0.133)];
  console.log(items);
  console.log(item);

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
          Select A Horse
          <select value={horsesName} onChange={handleChange1}>
            {selectHorse1.map((nameValue) => (
              <option>{nameValue}</option>
            ))}
          </select>
          Select A Horse
          <select value={horsesName} onChange={handleChange2}>
            {selectHorse2.map((nameValue) => (
              <option>{nameValue}</option>
            ))}
          </select>
          <br />
          <div> ID # - Horse Name - Starts - Rank - Winning$ - Win %</div>
          <h3>RANDOM HORSE SELECTIONS - {horses.length}</h3>
          <div>
            {horseData && (
              <>
                {horseData.horseid} - {horseData.horseName} -{horseData.sts}-
                {horseData.horseRank} - {horseData.horseWinnings} -
                {horseData.winPercent}%
              </>
            )}
            <br />
            {horseData1 && (
              <>
                {horseData1.horseid} - {horseData1.horseName} -{horseData1.sts}-
                {horseData1.horseRank} - {horseData1.horseWinnings} -
                {horseData1.winPercent}%
              </>
            )}
            <br />
            {horseData2 && (
              <>
                {horseData2.horseid} - {horseData2.horseName} -{horseData2.sts}-
                {horseData2.horseRank} - {horseData2.horseWinnings} -
                {horseData2.winPercent}%
              </>
            )}
            <br />
            {horseData3 && (
              <>
                {horseData2.horseid} - {horseData2.horseName} -{horseData2.sts}-
                {horseData2.horseRank} - {horseData2.horseWinnings} -
                {horseData2.winPercent}%
              </>
            )}
            <div>
              {[item].map((i, index) => (
                <p key={index}>{i}</p>
              ))}
            </div>
            Here Kevin
            {item}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RandomHorse;
