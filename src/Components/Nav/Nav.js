import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/home"> Home </Link>
          </li>
          <li>
            <Link to="/term"> Terminology </Link>
          </li>
          <li>
            <Link to="/landingPage/selections">Race Selections</Link>
          </li>
          <li>
            <Link to="/bets"> Place Your Bets</Link>
          </li>
          <li>
            <Link to="/management">Administration</Link>
          </li>
          <li>
            <ul id="navHowTo">
              <li>
                <Link to="/howToPlay"> Playing </Link>
              </li>
              <li>
                <Link to="/howToSelect"> Selections </Link>
              </li>
              <li>
                <Link to="/howToBet"> Betting</Link>
              </li>
            </ul>
          </li>
          <li>
            <ul id="navData">
              <li>
                <Link to="/horse"> Horse DATA </Link>
              </li>
              <li>
                <Link to="/jockey"> Jockey DATA </Link>
              </li>
              <li>
                <Link to="/trainer"> Trainer DATA</Link>
              </li>
              <li>
                <Link to="/track"> Track DATA</Link>
              </li>
              <li>
                <Link to="/race"> Race DATA </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
