import React from "react";
import HorseSelector from "./HorseSelector/HorseSelector";
import JockeySelector from "./JockeySelector/JockeySelector";
import TrackSelector from "./TrackSelector/TrackSelector";

function Selections(props) {
  // console.log(props);
  return (
    <div>
      <TrackSelector />

      <JockeySelector />
      <HorseSelector />
    </div>
  );
}

export default Selections;
