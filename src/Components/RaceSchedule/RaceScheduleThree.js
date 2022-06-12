import React from "react";
// import { Link, Outlet } from "react-router-dom";
import Iframe from "react-iframe";
import "./RaceScheduleThree.css";

function RaceScheduleThree() {
  return (
    <div className="RaceScheduleThreeWrapper">
      <div className="RaceScheduleThreeFrame">
        <Iframe
          width="843"
          height="800"
          src={process.env.PUBLIC_URL + "/media/RaceScheduleThree.pdf"}
          id="horseManagent"
          className="RaceScheduleThreeIframe"
        />
      </div>
    </div>
  );
}

export default RaceScheduleThree;
