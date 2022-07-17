import { NavLink, Outlet } from "react-router-dom";
import "./RaceSchedule.css";

function RaceSchedule() {
  return (
    <div className="raceWrapper">
      ROUTE SCHEDULE
      <div>
        <div className="raceScheduleGridContainer">
          <div className="raceScheduleGridTopRow">
            <div className="raceScheduleGridTopLeft">
              <ul>
                <div id="raceScheduleTitle">Race Schedule</div>
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
              <div id="raceSheduleSelectBy">
                Select by Country <br /> Select by Jockey <br /> Select by Track{" "}
                <br /> Select by Wagger <br /> Select by Popularity
              </div>
            </div>
            <div className="raceScheduleGridBottomLeft">
              Bottom Left- Quad Three
            </div>
          </div>
          <div className="raceScheduleGridBottomRow">
            <div className="raceScheduleGridTopRight">Top Right - Quad One</div>
            <div className="raceScheduleGridBottomRight">
              Bottom Right - Quad Four
            </div>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default RaceSchedule;
