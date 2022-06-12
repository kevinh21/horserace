import React from "react";
import Iframe from "react-iframe";
import "./HowToPlay.css";

function HowToPlay() {
  return (
    <div className="HowToPlayWrapper">
      <div className="HowToPlayFrame">
        <Iframe
          className="HowToPlayIframe"
          width="900"
          height="700"
          src={process.env.PUBLIC_URL + "/media/HowToPlay.pdf"}
          id="howToPlay"
        />
      </div>
    </div>
  );
}

export default HowToPlay;
