import React, { useState, useEffect } from "react";
import "./InputCalcs.css";
// import "../FeatureSelector/FeatureSelector"; //needed to retrieve values on form

function InputCalcs() {
  const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector("#result").value = "";
  }, []);

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
  });

  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector("#num").value;
    if (currentNum === "") return;
    let sum = currentSum + parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("sum:", currentSum);
    document.querySelector("form").reset();
    setClear(true);
    setCurrentSum(0);
  };

  return (
    <div className="InputCalcs">
      <div className="InputCalcs-title">
        <h2>Points Used (Max = 10)</h2>
      </div>
      <form>
        <input type="text" id="result" value={currentSum} readOnly />
        <input type="text" id="num" placeholder="enter a number" />
        <button onClick={Add}>Add</button>
        <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default InputCalcs;
