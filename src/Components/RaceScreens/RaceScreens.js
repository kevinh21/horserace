import React from "react";
import "./RaceScreens.css";
import moment from "moment";
// import { now } from "moment";

// import CurrentTime from "../Utility/CurrentTime";

function RaceScreens() {
  //   let current = Date();
  let start = moment().add(60, "minutes").format("hh:00 A"); //12 hour time (plus next hour)
  return (
    <div className="raceScreenCards">
      <div id="raceScreenCard">
        <span> RACE #1 - Begins: {" " + start} </span>
        <img
          id="raceScreenImage"
          alt="Horse Group"
          src={process.env.PUBLIC_URL + "/images/group1.jpg"}
        ></img>
        <span>Bell Mount Stakes</span>
      </div>
      <div id="raceScreenCard">
        <span> RACE #2 - Begins: {" " + start} </span>
        <img
          id="raceScreenImage"
          alt="Horse Group"
          src={process.env.PUBLIC_URL + "/images/group2.jpg"}
        ></img>
        Derby Tracks
      </div>
      <div id="raceScreenCard">
        <span> RACE #3 - Begins: {" " + start} </span>
        <img
          id="raceScreenImage"
          alt="Horse Group"
          src={process.env.PUBLIC_URL + "/images/group3.jpg"}
        ></img>
        Kentucky Park
      </div>
      <div id="raceScreenCard">
        <span> RACE #4 - Begins: {" " + start} </span>
        <img
          id="raceScreenImage"
          alt="Horse Group"
          src={process.env.PUBLIC_URL + "/images/group4.jpg"}
        ></img>
        Meadow Lark
      </div>
      <div id="raceScreenCard">
        <span> RACE #5 - Begins: {" " + start} </span>
        <img
          id="raceScreenImage"
          alt="Horse Group"
          src={process.env.PUBLIC_URL + "/images/group5.jpg"}
        ></img>
        WoodBurn
      </div>
      <div id="raceScreenCard">
        <span> RACE #6 - Begins: {" " + start} </span>
        <img
          id="raceScreenImage"
          alt="Horse Group"
          src={process.env.PUBLIC_URL + "/images/group6.jpg"}
        ></img>
        Church Heal Downs
      </div>
    </div>
  );
}

export default RaceScreens;

/*  TIME FORMATING
// display the current datetime
console.log(moment().format());
 
// add '1' hour to the current datetime
console.log(moment().add(1, 'h').format());
 
// add '30' minutes to the current datetime
console.log(moment().add(30, 'm').format());
 
// add '2' days to the current datetime
console.log(moment().add(2, 'd').format());
 
// add '1' week to the current datetime
console.log(moment().add(1, 'w').format());
 
// add '1' month to the current datetime
console.log(moment().add(1, 'M').format());
 
// subtract '1' hour from the current datetime
console.log(moment().subtract(1, 'h').format());
 
// subtract '30' minutes from the current datetime
console.log(moment().subtract(30, 'm').format());
 
// subtract '1' day from the current datetime
console.log(moment().subtract(1, 'd').format());
 
// subtract '1' week from the current datetime
console.log(moment().subtract(1, 'w').format());
 
// subtract '3' months from the current datetime
console.log(moment().subtract(3, 'M').format());*/
