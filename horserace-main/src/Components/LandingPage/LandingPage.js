import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingCards">
      <div id="landingCard">
        ONE
        <img
          id="landingImageTwo"
          alt="Horse Racers"
          src={process.env.PUBLIC_URL + "/images/group6.jpg"}
        ></img>
      </div>
      <div id="landingCard">
        TWO
        <img
          id="landingImageTwo"
          alt="Horse Racers"
          src={process.env.PUBLIC_URL + "/images/group7.jpg"}
        ></img>
      </div>
      <div id="landingCard">
        THREE
        <img
          id="landingImageTwo"
          alt="Horse Racers"
          src={process.env.PUBLIC_URL + "/images/group8.jpg"}
        ></img>
      </div>
      <div id="landingCard">
        FOUR
        <img
          id="landingImageTwo"
          alt="Horse Racers"
          src={process.env.PUBLIC_URL + "/images/group9.jpg"}
        ></img>
      </div>
      <div id="landingCard">
        FIVE
        <img
          id="landingImageTwo"
          alt="Horse Racers"
          src={process.env.PUBLIC_URL + "/images/group10.jpg"}
        ></img>
      </div>
      <div id="landingCard">
        SIX
        <img
          id="landingImageTwo"
          alt="Horse Racers"
          src={process.env.PUBLIC_URL + "/images/group11.jpg"}
        ></img>
      </div>
    </div>
  );
}

export default LandingPage;

/*
// <div className="landingPageWrap">
//       <img
//         className="landingHero"
//         alt="Horse Racers"
//         src={process.env.PUBLIC_URL + "/images/landingImage.jpg"}
//       ></img>
//       <div id="title">
//         DEVELOPER DERBY <br />
//         HORSE RACING AT IT'S FINEST{" "}
//       </div>
//       <p id="minBet">
//         Minimum Bet $2.00 <br />
//         You must be 18 to PLAY
//       </p>
//       <div id="landingPageGoToHorseRace">
//         <Link to="/home"> Go To the Races</Link>
//       </div>
//     </div>

*/
