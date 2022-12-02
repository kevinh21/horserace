import React, { useState } from "react";
import "./Moves.css";
function Moves() {
  const [move, setMove] = useState("white");

  const moves = ["white", "yellow", "red", "blue", "green"];

  const renderButtons = (moves) => {
    return moves.map((move, index) => {
      return (
        <li
          key={index}
          className={"move-selector " + move}
          onClick={() => setMove(move)}
        ></li>
      );
    });
  };

  return (
    <div className="show">
      CHANGE COLOR
      <div id="movesItem" className={move}></div>
      <div id="lineUp">{renderButtons(moves)}</div>
    </div>
  );
}

export default Moves;
