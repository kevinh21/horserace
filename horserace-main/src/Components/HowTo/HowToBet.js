import React from "react";
// import { Link, Outlet } from "react-router-dom";
import Iframe from "react-iframe";
import "./HowToBet.css";

function HowToBet() {
  return (
    <div className="HowToBetWrapper">
      <div className="HowToBetFrame">
        <Iframe
          className="HowToBetIframe"
          width="900"
          height="700"
          src={process.env.PUBLIC_URL + "/media/HowToBetOnHorses.pdf"}
          id="howToBet"
        />
      </div>
    </div>
  );
}

export default HowToBet;
