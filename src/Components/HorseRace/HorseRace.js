// import { Link } from "react-router-dom";
import Animate from "../Animate/Animate";
import RaceSchedule from "../RaceSchedule/RaceSchedule";
import "./HorseRace.css";

function HorseRace() {
  return (
    <div className="raceWrapper">
      <div>
        <video autoPlay muted controls id="video">
          <source
            src={process.env.PUBLIC_URL + "/media/raceVideo.mp4"}
            type="video/mp4"
          />
        </video>
        <RaceSchedule />
      </div>
      <Animate />
    </div>
  );
}

export default HorseRace;
