import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import LandingPage from "./Components/LandingPage/LandingPage";
import Management from "./Components/Management/Management";
import Selections from "./Components/Selector/Selections";
import HorseRace from "./Components/HorseRace/HorseRace";
// import HorseSelector from "./Components/Selector/HorseSelector/HorseSelector";
// import JockeySelector from "./Components/Selector/JockeySelector/JockeySelector";
// import TrackSelector from "./Components/Selector/TrackSelector/TrackSelector";
import HowToPlay from "./Components/HowTo/HowToPlay";
import HowToBet from "./Components/HowTo/HowToBet";
import HowToSelect from "./Components/HowTo/HowToSelect";
import Horse from "./Components/Data/Horse/Horse";
import Jockey from "./Components/Data/Jockey/Jockey";
import Track from "./Components/Data/Track/Track";
import Trainer from "./Components/Data/Trainer/Trainer";
import Race from "./Components/Data/Race/Race";
import Term from "./Components/Data/Term/Term";
import Bets from "./Components/Bets/Bets";
import RaceScheduleOne from "./Components/RaceSchedule/RaceScheduleOne";
import RaceScheduleTwo from "./Components/RaceSchedule/RaceScheduleTwo";
import RaceScheduleThree from "./Components/RaceSchedule/RaceScheduleThree";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path={"/"} element={<App />}>
        <Route index="/landingPage" element={<LandingPage />} />
        <Route path="/landingPage/management" element={<Management />} />
        <Route path="/landingPage/selections" element={<Selections />} />
        <Route path="/landingPage/horseRace" element={<HorseRace />} />
        {/* <Route path="/landingPage/horseSelector" element={<HorseSelector />} />
        <Route
          path="/landingPage/jockeySelector"
          element={<JockeySelector />}
        />
        <Route path="/landingPage/trackSelector" element={<TrackSelector />} /> */}
        <Route path="/landingPage" element={<LandingPage />} />
        <Route
          path="/raceSchedule/raceScheduleOne"
          element={<RaceScheduleOne />}
        />
        <Route
          path="/raceSchedule/raceScheduleTwo"
          element={<RaceScheduleTwo />}
        />
        <Route
          path="/raceSchedule/raceScheduleThree"
          element={<RaceScheduleThree />}
        />
        <Route path="/howToPlay" element={<HowToPlay />} />
        <Route path="/howToBet" element={<HowToBet />} />
        <Route path="/howToSelect" element={<HowToSelect />} />
        <Route path="/term" element={<Term />} />
        <Route path="/horse" element={<Horse />} />
        <Route path="/jockey" element={<Jockey />} />
        <Route path="/track" element={<Track />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/race" element={<Race />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/management" element={<Management />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
