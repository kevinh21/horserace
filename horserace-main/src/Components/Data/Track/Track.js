import React, { useState, useEffect } from "react";
import "./Track.css";

const Track = (props) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTrack();
  }, []);

  const getTrack = () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        let parseData = JSON.parse(data);
        console.log(parseData);
        setTracks(parseData);
      });
  };
  // function createTrack() {
  //   let trackName = prompt("Enter track name");
  //   let city = prompt("Enter city");
  //   let rank = prompt("Enter rank");
  //   fetch(`http://localhost:3001/tracks`, {
  //     method: "POST",
  //     s: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ trackName, city, rank }),
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getTrack();
  //     });
  // }
  // function deleteTrack() {
  //   let trackid = prompt("Enter trackid");
  //   fetch(`http://localhost:3001/tracks/${trackid}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getTrack();
  //     });
  // }

  const trackData = tracks.map((myTrack, index) => (
    <ul key={index}>
      <li id="trackDataWrapper">
        {/* <hr /> */}
        <h id="trackDataId"> {myTrack.trackid}</h>
        <h id="trackDatatrackName"> {myTrack.trackName}</h>
        <h id="trackDataState"> {myTrack.state}</h>
        <h id="trackDataGroundType"> {myTrack.groundType}</h>
        <h id="trackDataDistance"> {myTrack.distance}</h>
        <h id="trackDataRacingType"> {myTrack.racingType}</h>
      </li>
    </ul>
  ));

  return (
    <div>
      <div id="trackListHeader">
        {" "}
        TRACK DATA
        <br /> #{tracks.length} Listed
        <br />
      </div>
      <div id="trackListTitles"> </div>
      <h id="trackListID">ID </h>
      <h id="trackListTrackName">Track Name</h>
      <h id="trackListLocation">Location</h>
      <h id="trackListGroundType">Ground Type</h>
      <h id="trackListDistance">Distance</h>
      <h id="trackListRacingType">Racing Type</h>
      <div id="trackList"> {trackData}</div>
    </div>
  );
};
export default Track;
