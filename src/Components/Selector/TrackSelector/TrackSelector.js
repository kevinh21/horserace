import "./TrackSelector.css";
import React, { useState, useEffect } from "react";

const TrackSelector = (props) => {
  const [tracks, setTracks] = useState([]);
  const [trackValue, setTrackValue] = useState([]);

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
        // console.log(parseData);
        setTracks(parseData);
      });
  };

  const selectTrack = tracks.map((selectTrack, index) => (
    <div key={index}>{selectTrack.trackName}</div>
  ));
  // console.log("hello", { selectTrack });
  const handleChange = (event) => {
    setTrackValue(event.target.value);
  };

  return (
    <div>
      <div className="trackSelectorWrapper">
        <form>
          <label id="chooseATrack">
            Choose A Track
            <select value={trackValue} onChange={handleChange}>
              {selectTrack.map((option) => (
                <option>{option}</option>
              ))}
            </select>
          </label>
          Your Selected Track is: {trackValue}
        </form>
      </div>
    </div>
  );
};
export default TrackSelector;
