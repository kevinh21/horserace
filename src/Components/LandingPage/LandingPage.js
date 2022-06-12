import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPageWrap">
      <img
        className="landingHero"
        alt="Horse Racers"
        src={process.env.PUBLIC_URL + "/images/landingImage.jpg"}
      ></img>
      <div id="title">
        DEVELOPER DERBY <br />
        HORSE RACING AT IT'S FINEST{" "}
      </div>
      <p id="minBet">
        Minimum Bet $2.00 <br />
        You must be 18 to PLAY
      </p>
      <div id="landingPageGoToHorseRace">
        <Link to="/landingPage/horseRace"> Go To the Races</Link>
      </div>
    </div>
  );
};

export default LandingPage;
