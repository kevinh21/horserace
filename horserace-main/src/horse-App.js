// import React, { useState, useEffect } from "react";
import "./App.css";
import Horse from "./Horse/Horse";
import Track from "./Track/Track";
import Jockey from "./Jockey/Jockey";
import Race from "./Race/Race";

function App(props) {
  return (
    <div>
      <Horse />
      <Jockey />
      <Race />
      <Track />
    </div>
  );
}

export default App;
