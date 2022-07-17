// import { Link } from "react-router-dom";
import Animate from "../Animate/Animate";
import RaceHorse from "../RaceHorse/RaceHorse";
import "./HorseRace.css";

function HorseRace() {
  return (
    <div className="horseRaceGridContainer">
      <div className="horseRaceGridTopRow">
        <div className="horseRaceGridTopLeft">
          <RaceHorse />
        </div>
        <div className="horseRaceGridBottomLeft"></div>
      </div>
      <div className="horseRaceGridBottomRow">
        <div className="horseRaceGridTopRightVideo">
          <video autoPlay muted controls id="video">
            <source
              src={process.env.PUBLIC_URL + "/media/raceVideo.mp4"}
              type="video/mp4"
            />
          </video>
          <Animate />
        </div>
        <div className="horseRaceGridBottomRight"></div>
      </div>
    </div>
  );
}

export default HorseRace;
