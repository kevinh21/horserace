import { NavLink, Outlet } from "react-router-dom";
import "./RaceSchedule.css";

function RaceSchedule() {
  return (
    <div className="raceWrapper">
      ROUTE SCHEDULE
      <div>
        <Outlet />
        <div className="raceScheduleList">
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
      </div>
    </div>
  );
}

export default RaceSchedule;
