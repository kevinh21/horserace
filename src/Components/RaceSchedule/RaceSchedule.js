// import { NavLink, Outlet } from "react-router-dom";
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
                <div id="raceScheduleTitle">
                  <h1>LOCATION</h1> - DROP DOWN LIST OF STATES
                  <h1>Track</h1> - DROP DOWN LIST TO SELECT RaceTrack
                  <br />
                  <br />
                  <div id="raceScheduleDetails">
                    <div>Belmont Derby </div>
                    <br />
                    Track information goes here ...
                  </div>
                </div>
              </ul>
              <div id="raceSheduleSelectBy">
                {/* Select by Country <br /> Select by Jockey <br /> Select by Track
                <br /> Select by Wagger <br /> Select by Popularity */}
              </div>
            </div>
            <div className="raceScheduleGridBottomLeft">
              Horses Running - Based on Selection of Race/Time - determined byt
              Track
              <br />
              <h3>
                Race #1 - Belmont Derby - | 6.5f | Starter Optional Claiming |
                Dirt Track
              </h3>
              <br /> 1 Ravi's SongUnbridled's Song <br />2 Engelbert TadJacobse
              Stella
              <br />3 Denver Hogan Reid Amir <br />4 La Macchina Malibu Moon
              <br />5 Peyote Patty Cactus Ridge <br />6 Pilgrim Trust Candy Ride
              <br />7 Callen Robinson Thelma Etha <br />8 MoTown Uncle
            </div>
          </div>
          <div className="raceScheduleGridBottomRow">
            <div className="raceScheduleGridTopRight">
              Start Time - Deived List of Races/Times based on Track Selected
              <br />
              RACE #1 --- 9:00am --- 8 Horses
              <br />
              RACE #2 --- 9:00am --- 11 Horses
              <br />
              RACE #3 --- 9:00am --- 6 Horses
              <br />
              RACE #4 --- 9:00am --- 12 Horses
              <br />
              RACE #5 --- 9:00am --- 9 Horses
              <br />
              RACE #6 --- 9:00am --- 8 Horses
              <br />
              RACE #7 --- 9:00am --- 7 Horses
              <br />
              RACE #8 --- 9:00am --- 10 Horses
            </div>
            <div className="raceScheduleGridBottomRight">
              Clicking on horse in the list will show it's stats/picture
            </div>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default RaceSchedule;
