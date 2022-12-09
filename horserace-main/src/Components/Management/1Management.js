import React from "react";
// import { Link, Outlet } from "react-router-dom";
import Iframe from "react-iframe";
import "./Management.css";

function Management() {
  return (
    <div className="managementWrapper">
      <div className="managementFrame">
        <Iframe
          width="980"
          height="500"
          src={process.env.PUBLIC_URL + "/media/management.pdf"}
          id="horseManagent"
          className="managementIframe"
        />
      </div>
      <div className="managementDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti
        officia recusandae iure saepe quam sit? Laboriosam in quos maiores,
        inventore deserunt eum ut recusandae nostrum autem error ratione numquam
      </div>
    </div>
  );
}

export default Management;
