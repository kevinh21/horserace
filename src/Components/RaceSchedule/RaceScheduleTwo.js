import React from "react";
// import { Link, Outlet } from "react-router-dom";
import Iframe from "react-iframe";
import "./RaceScheduleTwo.css";

function RaceScheduleTwo() {
  return (
    <div className="RaceScheduleTwoWrapper">
      <div className="RaceScheduleTwoFrame">
        <Iframe
          width="880"
          height="780"
          src={process.env.PUBLIC_URL + "/media/RaceScheduleTwo.pdf"}
          id="horseManagent"
          className="RaceScheduleTwoIframe"
        />
      </div>
    </div>
  );
}

export default RaceScheduleTwo;
