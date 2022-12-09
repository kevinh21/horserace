import React from "react";
// import { Link, Outlet } from "react-router-dom";
import Iframe from "react-iframe";
// import "./Horse.css";

function Horse() {
  return (
    <div className="horseWrapper">
      <div className="horseFrame">
        <Iframe
          width="800"
          height="500"
          src={process.env.PUBLIC_URL + "/media/horseMgt.pdf"}
          id="horseManagent"
          className="horseIframe"
        />
      </div>
      <div className="horseDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti
        officia recusandae iure saepe quam sit? Laboriosam in quos maiores,
        inventore deserunt eum ut recusandae nostrum autem error ratione numquam
      </div>
    </div>
  );
}

export default Horse;

// http://localhost:3000/landingPage/horse

// http://localhost/horses_list.php
