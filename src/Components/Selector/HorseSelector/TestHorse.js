import "./HorseSelector.css";
import React, { useState, useEffect } from "react";
// import Horse from "../../Data/Horse/Horse";

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
        // let parseData = JSON.parse(data);
        console.log(data);
        setHorses(data);
      });
  };

  console.log(horses);
  console.log(horseValue);

  return (
    <div>
      <div> {horses.length};</div>
    </div>
  );
};
export default HorseSelector;
