import React from "react";
import HorseSelector from "./HorseSelector/HorseSelector";
import JockeySelector from "./JockeySelector/JockeySelector";
// import RaceHorse from "../RaceHorse/RaceHorse";
import TrackSelector from "./TrackSelector/TrackSelector";
// import Generator from "./RaceSelector/Generator";

function Selections(props) {
  return (
    <div>
      <TrackSelector />
      <JockeySelector />
      <HorseSelector />
      {/* <Generator /> */}
      {/* <RaceHorse /> */}
    </div>
  );
}

export default Selections;
