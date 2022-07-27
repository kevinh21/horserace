// import { Link } from "react-router-dom";
import Animate from "../Animate/Animate";
import RaceHorse from "./RaceHorse/RaceHorse";
import "./HorseRace.css";
import RaceJockey from "./RaceJockey/RaceJockey";

function HorseRace() {
  return (
    <div className="horseRaceGridContainer">
      <div className="horseRaceGridLeft">
        <RaceHorse />
        <RaceJockey />
      </div>
      <div className="horseRaceGridRight">
        <video id="video" autoPlay muted>
          <source
            src={process.env.PUBLIC_URL + "/media/raceVideo.mp4"}
            type="video/mp4"
          />
        </video>
        <div id="animateHorses">
          <Animate />
        </div>
      </div>
    </div>
  );
}

export default HorseRace;
