import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navWrapper">
      <nav className="navBar">
        <div id="navLogo">
          <img
            className="navLogo"
            alt="Horse Racers"
            src={process.env.PUBLIC_URL + "/images/navLogo.png"}
          ></img>
        </div>
        <ul className="navMenu">
          <li id="navHome">
            <NavLink to="/home"> Home </NavLink>
          </li>
          <li id="navScreens">
            <NavLink to="/raceScreens"> Screens </NavLink>
          </li>
          <li>
            <NavLink to="/management">Management</NavLink>
          </li>
          <li>
            <ul id="navHowTo">
              <li>
                <NavLink to="/howToPlay"> Playing </NavLink>
              </li>
              <li>
                <NavLink to="/term"> Terminology </NavLink>
              </li>
              <li>
                <NavLink to="/howToSelect"> Selections </NavLink>
              </li>
              <li>
                <NavLink to="/howToBet"> Betting Guide</NavLink>
              </li>
              <li>
                <NavLink to="/bets"> Ways to Bet</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul id="navMakeSelections">
              <li>
                <NavLink to="/selections">Horses/Jockeys/etc.</NavLink>
              </li>
              <li>
                <NavLink to="/raceSchedule">Schedules</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <ul className="navData">
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
                <NavLink to="/pastRaces"> Past Race DATA </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul id="navStartRace">
              <li>
                <NavLink to="/horseRace"> AM Races </NavLink>
              </li>
              <li>
                <NavLink to="/horseRace"> PM Races </NavLink>
              </li>
              <li>
                <NavLink to="/horseRace"> Hi-Stakes</NavLink>
              </li>
              <li>
                <NavLink to="/raceschedule">Schedules</NavLink>
              </li>
              <li>
                <NavLink to="/race"> Addiction ? </NavLink>
              </li>
            </ul>
          </li>
          <ul id="shopping">
            <li>
              <NavLink to="/productBrowse">Browse products </NavLink>
            </li>
            <li>
              <NavLink to="/productManagement">Manage Products </NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/wish">Wish List</NavLink>
            </li>
            <li>
              <NavLink to="/checkout">Checkout</NavLink>
            </li>
            <li>
              <NavLink to="/returns">Returns</NavLink>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
