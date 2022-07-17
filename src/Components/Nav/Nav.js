import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navWrapper">
      <div id="navLogo">
        <img
          className="landingHero"
          alt="Horse Racers"
          src={process.env.PUBLIC_URL + "/images/navLogo.png"}
        ></img>
      </div>
      <nav>
        <ul id="navMenu">
          <li id="home">
            <NavLink to="/home"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/term"> Terminology </NavLink>
          </li>
          <li>
            <NavLink to="/selections">Race Selections</NavLink>
          </li>
          <li>
            <NavLink to="/bets"> Place Your Bets</NavLink>
          </li>
          <li>
            <NavLink to="/management">Administration</NavLink>
          </li>
          <li>
            <ul id="navHowTo">
              <li>
                <NavLink to="/howToPlay"> Playing </NavLink>
              </li>
              <li>
                <NavLink to="/howToSelect"> Selections </NavLink>
              </li>
              <li>
                <NavLink to="/howToBet"> Betting</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul id="navData">
              <li>
                <NavLink to="/horse"> Horse DATA </NavLink>
              </li>
              <li>
                <NavLink to="/jockey"> Jockey DATA </NavLink>
              </li>
              <li>
                <NavLink to="/trainer"> Trainer DATA</NavLink>
              </li>
              <li>
                <NavLink to="/track"> Track DATA</NavLink>
              </li>
              <li>
                <NavLink to="/race"> Race DATA </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul id="navStartRace">
              <li>
                <NavLink to="/horseRace"> Morning Races </NavLink>
              </li>
              <li>
                <NavLink to="/horseRace"> Evening Races </NavLink>
              </li>
              <li>
                <NavLink to="/horseRace"> Hi-Stakes Races</NavLink>
              </li>
              <li>
                <NavLink to="/raceschedule"> Race Schedules</NavLink>
              </li>
              <li>
                <NavLink to="/race"> Addiction Help </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
