import React from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import "./RaceScheduleOne.css";

function RaceScheduleOne() {
  return (
    <div>
      <div className="raceScheduleOneWrapper">
        <ul>
          <li id="raceSheduleTwo">
            <Link to="/raceSchedule/raceScheduleTwo">Race #2 5:00 PM</Link>
          </li>
          <li id="raceSheduleThree">
            <Link to="/raceSchedule/raceScheduleThree">
              Race #3 7:00 PM <br />
            </Link>
          </li>
        </ul>{" "}
      </div>
      <div className="raceScheduleOneFrame">
        <Iframe
          className="raceScheduleOneIframe"
          width="900"
          height="700"
          src={process.env.PUBLIC_URL + "/media/raceScheduleOne.pdf"}
          id="raceScheduleOne"
        />
      </div>
    </div>
  );
}

export default RaceScheduleOne;
