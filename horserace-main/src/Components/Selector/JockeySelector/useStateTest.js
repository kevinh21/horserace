import React, { useState } from "react";

function useStateTest(props) {
  const [horseSelection, setHorseSelection] = useState(false);

  function selectHorse() {
    switch (this.state.selectHorse) {
      case "horseOne":
        return (
          <div>
            <img
              className="horseSelectorImage"
              alt="Two Horse Racers"
              src={process.env.PUBLIC_URL + "/images/horseSelect1.jpg"}
            ></img>
            setHorseSelection(horseOne)
          </div>
        );

      case "horseTwo":
        return (
          <img
            className="horseSelectorImage"
            alt="Two Horse Racers"
            src={process.env.PUBLIC_URL + "/images/horseSelect2.jpg"}
          ></img>
        );

      case "horseThree":
        return (
          <img
            className="horseSelectorImage"
            alt="Two Horse Racers"
            src={process.env.PUBLIC_URL + "/images/horseSelect3.jpg"}
          ></img>
        );

      case "horseFour":
        return (
          <img
            className="horseSelectorImage"
            alt="Two Horse Racers"
            src={process.env.PUBLIC_URL + "/images/horseSelect4.jpg"}
          ></img>
        );

      default:
        return (
          <img
            className="horseSelectorImage"
            alt="Two Horse Racers"
            src={process.env.PUBLIC_URL + "/images/horseSelect5.jpg"}
          ></img>
        );
    }
  }

  <div>
    <div className="horseOutput">
      <h1> RAW HORSE DATA OUTPUT</h1>
      {horseSelection ? horseSelection : "There is no horse data available"}
    </div>
  </div>;

  selectHorse();
  <button onClick={selectHorse}>Pick a Horse</button>;
}
export default useStateTest;
