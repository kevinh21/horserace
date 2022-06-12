import { Link } from "react-router-dom";
import "./RaceSchedule.css";

function RaceSchedule() {
  return (
    <div className="raceWrapper">
      <div>
        <div className="raceScheduleList">
          <ul>
            <div id="raceSchedule">Race Schedule</div>
            <li id="raceSheduleOne">
              <Link to="/raceSchedule/raceScheduleOne">Race #1 3:00 PM</Link>
            </li>
            <li id="raceSheduleTwoo">
              <Link to="/raceSchedule/raceScheduleTwo">Race #2 5:00 PM</Link>
            </li>
            <li id="raceSheduleThree">
              <Link to="/raceSchedule/raceScheduleThree">
                Race #3 7:00 PM <br />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RaceSchedule;
