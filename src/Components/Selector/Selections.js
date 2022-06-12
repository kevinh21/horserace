import React from "react";
import HorseSelector from "./HorseSelector/HorseSelector";
import JockeySelector from "./JockeySelector/JockeySelector";
import TrackSelector from "./TrackSelector/TrackSelector";

function Selections(props) {
  return (
    <div>
      <TrackSelector />
      <HorseSelector />
      <JockeySelector />
    </div>
  );
}

export default Selections;
