import React from "react";
import "./Home.css";
// import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="homeGridContainer">
      <div className="homeGridTopRow">
        <div className="homeGridTopLeft">Top Left - QuadTwo</div>
        <div className="homeGridBottomLeft">Bottom Left- Quad Three</div>
      </div>
      <div className="homeGridBottomRow">
        <div className="homeGridTopRight">Top Right - Quad One</div>
        <div className="homeGridBottomRight">Bottom Right - Quad Four</div>
      </div>
    </div>
  );
};

export default Home;
