import React from "react";
import { NavLink } from "react-router-dom";
import Iframe from "react-iframe";
import "./RaceScheduleThree.css";

function RaceScheduleThree() {
  return (
    <div>
      <div className="raceScheduleOneWrapper">
        <ul>
          <div id="raceSchedule">Race Schedule</div>
          <li id="raceSheduleOne">
            <NavLink to="/raceSchedule/raceScheduleOne">
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
