import React from "react";
import Iframe from "react-iframe";
import "./Bets.css";

function Bets() {
  return (
    <div className="betsWrapper">
      <div className="betsFrame">
        <Iframe
          className="betsIframe"
          width="900"
          height="700"
          src={process.env.PUBLIC_URL + "/media/betting101.pdf"}
          id="bets"
        />
      </div>
    </div>
  );
}

export default Bets;
