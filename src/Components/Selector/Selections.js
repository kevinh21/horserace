import React from "react";
import HorseSelector from "./HorseSelector/HorseSelector";
import JockeySelector from "./JockeySelector/JockeySelector";
import RandomHorse from "./RandomSelector/RandomHorse";
import TrackSelector from "./TrackSelector/TrackSelector";

function Selections(props) {
  return (
    <div>
      <TrackSelector />
      <JockeySelector />
      <HorseSelector />
      <RandomHorse />
    </div>
  );
}

export default Selections;
