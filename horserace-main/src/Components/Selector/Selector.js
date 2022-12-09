import "./HorseSelector.css";
import React, { useState, useEffect } from "react";
import Counter from "../../Utility/Counter";

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
  function createHorse() {
    let horseName = prompt("Enter horse name");
    let winnings = prompt("Enter winnings");
    let rank = prompt("Enter rank");
    fetch(`http://localhost:3001/horses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ horseName, winnings, rank }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getHorse();
      });
  }
  function deleteHorse() {
    let horseid = prompt("Enter horse id");
    fetch(`http://localhost:3001/horses/${horseid}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getHorse();
      });
  }

  const selectHorse = horses.map((selectHorse, index) => (
    <div key={index}>{selectHorse.horseName}</div>
  ));
  console.log("hello", { selectHorse });
  const handleChange = (event) => {
    setHorseValue(event.target.value);
  };

  return (
    <div>
      <div className="horseSelectorWrapper">
        <form>
          <label id="chooseAHorse">
            Choose A Horse
            <select value={horseValue} onChange={handleChange}>
              {selectHorse.map((option) => (
                <option>{option}</option>
              ))}
            </select>
          </label>
          Your Selected Horse is: {horseValue}
        </form>
        <div id="configureText">Configure Your Horse </div>
        <div id="cost">(Each Point Additional $1.00)</div>
        <div id="horseAddButton">
          $4.99 Each
          <br />
          <button onClick={createHorse}>Add horse</button>
        </div>
        <div id="horseDeleteButton">
          $1.99 Credit
          <br />
          <button onClick={deleteHorse}>Delete horse</button>
        </div>
        <div className="counter">
          <Counter />
        </div>
      </div>{" "}
      <img
        className="horseSelectorImage"
        alt="Horse Motion"
        src={process.env.PUBLIC_URL + "/images/horseSelectorImage.jpg"}
      ></img>
    </div>
  );
};
export default HorseSelector;
