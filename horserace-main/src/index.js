// remember to: npm install react-router-dom

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import Home from "./Components/Home/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import Management from "./Components/Management/Management";
import Selections from "./Components/Selector/Selections";
import HorseRace from "./Components/HorseRace/HorseRace";
import HowToPlay from "./Components/HowTo/HowToPlay";
import HowToBet from "./Components/HowTo/HowToBet";
import HowToSelect from "./Components/HowTo/HowToSelect";
import Horse from "./Components/Data/Horse/Horse";
import Jockey from "./Components/Data/Jockey/Jockey";
import Track from "./Components/Data/Track/Track";
import Trainer from "./Components/Data/Trainer/Trainer";
import PastRaces from "./Components/Data/PastRaces/PastRaces";
import RaceHorse from "./Components/HorseRace/RaceHorse/RaceHorse";
import Term from "./Components/Data/Term/Term";
import Bets from "./Components/Bets/Bets";
import RaceSchedule from "./Components/RaceSchedule/RaceSchedule";
import RaceScreens from "./Components/RaceScreens/RaceScreens";
import ProductManagement from "./Components/Shop/ProductManagement/ProductManagement";
import ProductBrowse from "./Components/Shop/ProductBrowse/ProductBrowse";
import Cart from "./Components/Shop/Cart/Cart";
import Wish from "./Components/Shop/WishList/WishList";
import Checkout from "./Components/Shop/Cart/Checkout";
import Returns from "./Components/Shop/Returns/Returns";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path={"/"} element={<App />}>
        <Route path="/landingPage/" element={<LandingPage />} />
        <Route index="/landingPage/" element={<LandingPage />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/landingPage" element={<LandingPage />} />
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
        <Route path="/raceHorse" element={<RaceHorse />} />
        <Route path="raceSchedule" element={<RaceSchedule />} />
        <Route path="/raceScreens" element={<RaceScreens />} />
        <Route path="/productManagement" element={<ProductManagement />} />
        <Route path="/productBrowse" element={<ProductBrowse />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/returns" element={<Returns />} />
      </Route>
    </Routes>
  </Router>
);
