import React from "react";
import Iframe from "react-iframe";
import "./HowToSelect.css";

function HowToSelect() {
  return (
    <div className="HowToSelectWrapper">
      <div className="HowToSelectFrame">
        <Iframe
          className="HowToSelectIframe"
          width="900"
          height="700"
          src={process.env.PUBLIC_URL + "/media/HowToPickWinners.pdf"}
          id="howToSelect"
        />
      </div>
    </div>
  );
}

export default HowToSelect;
