import React from "react";
// import { Link, Outlet } from "react-router-dom";
import Iframe from "react-iframe";
import "./Management.css";

function Track() {
  return (
    <div className="trackWrapper">
      <div className="trackFrame">
        <Iframe
          width="800"
          height="500"
          src={process.env.PUBLIC_URL + "/media/mainMgt.pdf"}
          id="horseManagent"
          className="trackIframe"
        />
      </div>
      <div className="trackDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti
        officia recusandae iure saepe quam sit? Laboriosam in quos maiores,
        inventore deserunt eum ut recusandae nostrum autem error ratione numquam
      </div>
    </div>
  );
}

export default Track;
