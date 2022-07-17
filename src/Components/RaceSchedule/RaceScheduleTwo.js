import React from "react";
import { NavLink } from "react-router-dom";
import Iframe from "react-iframe";
import "./RaceScheduleTwo.css";

function RaceScheduleTwo() {
  return (
    <div>
      <div className="raceScheduleTwoWrapper">
        <ul>
          <div id="raceSchedule">Race Schedule</div>
          <li id="raceSheduleTwo">
            <NavLink to="/raceSchedule/raceScheduleTwo">
              Race #1 3:00 PM
            </NavLink>
          </li>
          <li id="raceSheduleTwoo">
            <NavLink to="/raceSchedule/raceScheduleTwo">
              Race #2 5:00 PM
            </NavLink>
          </li>
          <li id="raceSheduleThree">
            <NavLink to="/raceSchedule/raceScheduleThree">
              Race #3 7:00 PM <br />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="RaceScheduleTwoFrame">
        <Iframe
          width="880"
          height="780"
          src={process.env.PUBLIC_URL + "/media/RaceScheduleTwo.pdf"}
          id="horseManagent"
          className="RaceScheduleTwoIframe"
        />
      </div>
      ;
    </div>
  );
}

export default RaceScheduleTwo;
