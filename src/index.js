import React from "react";
//npm install react-routeer-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import Home from "./Components/Home/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import Management from "./Components/Management/Management";
import Selections from "./Components/Selector/Selections";
import Generator from "./Components/Selector/RaceSelector/Generator";
import HorseRace from "./Components/HorseRace/HorseRace";
import HowToPlay from "./Components/HowTo/HowToPlay";
import HowToBet from "./Components/HowTo/HowToBet";
import HowToSelect from "./Components/HowTo/HowToSelect";
import Horse from "./Components/Data/Horse/Horse";
import Jockey from "./Components/Data/Jockey/Jockey";
import Track from "./Components/Data/Track/Track";
import Trainer from "./Components/Data/Trainer/Trainer";
import PastRaces from "./Components/Data/PastRaces/PastRaces";
import RaceHorse from "./Components/RaceHorse/RaceHorse";
import Term from "./Components/Data/Term/Term";
import Bets from "./Components/Bets/Bets";
import RaceSchedule from "./Components/RaceSchedule/RaceSchedule";
// import RaceScheduleOne from "./Components/RaceSchedule/RaceScheduleOne";
// import RaceScheduleTwo from "./Components/RaceSchedule/RaceScheduleTwo";
// import RaceScheduleThree from "./Components/RaceSchedule/RaceScheduleThree";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path={"/"} element={<App />}>
        <Route index="/home/" element={<Home />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/landingPage/" element={<LandingPage />} />
        <Route path="/landingPage/management" element={<Management />} />
        <Route path="/selections" element={<Selections />} />
        <Route path="/horseRace" element={<HorseRace />} />
        <Route path="/howToPlay" element={<HowToPlay />} />
        <Route path="/howToBet" element={<HowToBet />} />
        <Route path="/howToSelect" element={<HowToSelect />} />
        <Route path="/term" element={<Term />} />
        <Route path="/horse" element={<Horse />} />
        <Route path="/jockey" element={<Jockey />} />
        <Route path="/track" element={<Track />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/pastRaces" element={<PastRaces />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/management" element={<Management />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/raceHorse" element={<RaceHorse />} />
        <Route path="raceSchedule" element={<RaceSchedule />}>
          {/* <Route path="raceScheduleOne" element={<RaceScheduleOne />} />
          <Route path="raceScheduleTwo" element={<RaceScheduleTwo />} />
          <Route path="raceScheduleThree" element={<RaceScheduleThree />} /> */}
        </Route>
      </Route>
    </Routes>
  </Router>
);
