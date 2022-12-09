import React from "react";
import HorseSelector from "./HorseSelector/HorseSelector";
import JockeySelector from "./JockeySelector/JockeySelector";
import TrackSelector from "./TrackSelector/TrackSelector";
import "./Selections.css";
// import Generator from "./RaceSelector/Generator";

function Selections(props) {
  return (
    <div>
      <div className="selectionsGridContainer">
        <div className="selectionsGridTopRow">
          <div className="selectionsGridTopLeft">
            <TrackSelector />
          </div>
          <div className="selectionsGridBottomLeft">
            Bottom Left- Quad Three <HorseSelector />
          </div>
        </div>
        <div className="selectionsGridBottomRow">
          <div className="selectionsGridTopRight">Top Right - Quad One</div>
          <div className="selectionsGridBottomRight">
            Bottom Right - Quad Four <JockeySelector />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selections;
