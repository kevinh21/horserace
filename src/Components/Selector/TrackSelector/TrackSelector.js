import "./TrackSelector.css";
import React, { useState, useEffect } from "react";

const TrackSelector = (props) => {
  const [tracks, setTracks] = useState([]);
  const [tracksName, setTracksName] = useState([]);
  const [tracksInfo, setTracksInfo] = useState(tracks);

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
        setTracks(parseData);
        // setTracksInfo(trackData);
      });
  };

  const handleChange = (event) => {
    setTracksName(event.target.value);
    const trackData = tracks.find(findTrack);
    setTracksInfo(trackData);
  };

  const selectTrack = tracks.map((selectTrack, index) => (
    <div key={index}>{selectTrack.trackName}</div>
  ));

  const findTrack = (track) => {
    return track.trackName === tracksName;
  };
  const trackData = tracks.find(findTrack);
  // console.log(trackData);
  return (
    <div>
      <div className="trackSelectorWrapper">
        <p>
          Select A Track
          <select value={tracksName} onChange={handleChange}>
            {selectTrack.map((nameValue) => (
              <option>{nameValue}</option>
            ))}
          </select>
          <br />
          <div>
            {" "}
            ID # - Track Name - Location - Ground Type - Distance - Race Type
          </div>
          <div>
            {trackData && (
              <>
                {trackData.trackid} - {trackData.trackName} -{trackData.state}-
                {trackData.groundType} - {trackData.distance} -
                {trackData.racingType}
              </>
            )}
          </div>
        </p>
        {/* <h3>Number of Tracks - {tracks.length}</h3> */}
      </div>
    </div>
  );
};

export default TrackSelector;
