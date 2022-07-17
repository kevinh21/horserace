import React from "react";
import "./Animate.css";

function Animate(props) {
  return (
    <div>
      <div id="motion-horse1">
        <div className="raceHorseOne">
          <img
            src={process.env.PUBLIC_URL + "/images/animateHorseOne.png"}
            alt="horse graphic 1"
          />
        </div>
      </div>
      <div id="motion-horse2">
        <div className="raceHorseTwo">
          <img
            src={process.env.PUBLIC_URL + "/images/animateHorseTwo.png"}
            alt="horse graphic 2"
          />
        </div>
      </div>
      <div id="motion-horse3">
        <div className="raceHorseThree">
          <img
            src={process.env.PUBLIC_URL + "/images/animateHorseThree.png"}
            alt="horse graphic 3"
          />
        </div>
      </div>
      <div id="motion-horse4">
        <div className="raceHorseFour">
          <img
            src={process.env.PUBLIC_URL + "/images/animateHorseFour.png"}
            alt="horse graphic 4"
          />
        </div>
      </div>
    </div>
  );
}

export default Animate;
