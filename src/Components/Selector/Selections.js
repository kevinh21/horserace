import React from "react";
import HorseSelector from "./HorseSelector/HorseSelector";
import JockeySelector from "./JockeySelector/JockeySelector";
import TrackSelector from "./TrackSelector/TrackSelector";
import "./Selections.css";
// import Generator from "./RaceSelector/Generator";

function Selections(props) {
  return (
    <div>
      <div className="homeGridContainer">
        <div className="homeGridTopRow">
          <div className="homeGridTopLeft">
            <TrackSelector />
            <JockeySelector />
            <HorseSelector />
          </div>
          <div className="homeGridBottomLeft">Bottom Left- Quad Three</div>
        </div>
        <div className="homeGridBottomRow">
          <div className="homeGridTopRight">Top Right - Quad One</div>
          <div className="homeGridBottomRight">Bottom Right - Quad Four</div>
        </div>
      </div>
    </div>
  );
}

export default Selections;
